import * as express from 'express';
import security from './config/security';
import initialize from './models';
import routes from './routes';

import logger = require('morgan');
const bodyParser = require('body-parser');
import path = require('path');

// Configure dotenv to load in the .env file
import dotenv = require('dotenv');
const result = dotenv.config();

const __dirname = process.env.PWD; // Could break on prod

const app = express(); // Setup express app

// Allow cross origin requests with authorization (for API purposes)
app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    res.header(
        'Access-Control-Allow-Headers',
        'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION',
    );
    // Intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});

// Setup authentication and security
security(app);
initialize();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
//  + increasing body request limit size
app.use(bodyParser.json({ limit: '15mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));

// Parse queries into numbers, not strings
var queryParser = require('express-query-int');
app.use(bodyParser.json());
app.use(queryParser());

app.use('/scripts', express.static(path.join(__dirname, '../../client/dist')));

// Require routes and simultaneously attach app
routes(app);

// Catch all if the routes doesn't find a valid URL
app.get(
    '*',
    (req: express.Request, res: express.Response): express.Response =>
        res.status(200).send({
            message: 'For some reason, none of the routes hit...',
        }),
);

export default app;
