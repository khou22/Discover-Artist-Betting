import * as authorization from 'auth-header'; // For parsing authentication
import { Buffer } from 'buffer';
import * as express from 'express';
import * as logger from 'heroku-logger'; // For logging to the log heroku log file

// Whitelisted IPs
const validIPs = [
    '::ffff:127.0.0.1', // Local host
    '127.0.0.1', // IPv4 - localhost (?)
    '::1', // IPv6
];

// Whitelisted urls
const validReferers = ['(https?://)?localhost:3000.*'];
const validURLs = new RegExp(validReferers.join('|'), 'i'); // Convert to regular expression

// Whitelisted assets - already not in the blacklist so not entirely neccessary anymore
const validPages = ['/', '/favicon.ico', '/scripts/index.js'];

// Any route in the blacklist will require authentication
const blacklist = /\/api.*/; // Just APIs

// Handle 401 error code - Unauthorized
const unauthorizedResponse = (res: express.Response): void => {
    res.status(401).send('Request failed: Bad authentication');
};

const security = (app): void => {
    // Skip whitelisted domains
    app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
        // Require authentication if not in the whitelist or is in blacklist
        const inWhitelist = validPages.indexOf(req.originalUrl) > -1;
        if (!inWhitelist || blacklist.test(req.originalUrl)) {
            // Get the IP address
            const ip: string = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.ip) as string;
            const referer = req.header('Referer'); // If the request is being sent by a website
            console.log('IP: ', ip);
            if (validIPs.indexOf(ip) > -1) {
                console.log(ip, 'is a whitelisted IP');
                logger.info('Whitelisted IP', { ip: ip });
                next(); // Request valid
            } else if (referer && validURLs.test(referer)) {
                logger.info('Whitelisted Referer', { referer: referer });
                next(); // Request valid
            } else {
                // logger.info("Checking authorization...")
                const authHeader = req.header['authorization']
                    ? req.header['authorization']
                    : req.headers['authorization'];

                // Fail if no basic authentication provided
                if (!authHeader) {
                    // No authorization
                    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"'); // Prompt challenge password
                    logger.error('No Authentication', {
                        ip: ip,
                        referer: referer,
                        url: req.originalUrl,
                    });
                    return unauthorizedResponse(res);
                }

                // Retreive authorization token
                const auth = authorization.parse(authHeader);

                // Get the basic auth component
                const [un, pw] = new Buffer(auth.token, 'base64').toString().split(':', 2);

                // Verify authentication.
                if (un !== 'admin' || pw !== process.env.ADMIN_API_KEY) {
                    logger.error('Unauthorized Credentials', { username: un, password: pw });
                    return unauthorizedResponse(res);
                }

                logger.info('User Authenticated', { username: un, password: pw });
                next(); // Request valid
            }
        } else {
            // Skip authentication
            logger.info('Whitelist or not in blacklist', { url: req.originalUrl });
            next();
        }
    });
};

export default security;
