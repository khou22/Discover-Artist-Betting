// server/routes/index.js
// API route that maps functionality
import * as express from 'express';
import * as path from 'path';
import ArtistRoutes from './artist';
import FriendRoutes from './friends';
import UserRoutes from './user';

// Requires an app as an input so can direct the user accordingly
const routes = (app: express.Application): void => {
    // Modular routes
    UserRoutes(app);
    ArtistRoutes(app);
    FriendRoutes(app);

    // Serve static files
    app.use(express.static('./client/build'));

    app.get('/favicon.png', (req: express.Request, res: express.Response): void => {
        const __dirname = process.env.PWD;
        res.sendFile('favicon.png', { root: path.join(__dirname, './client/assets') });
    });

    // Client app entry index.html file - react router
    app.get('*', (req: express.Request, res: express.Response): void => {
        const __dirname = process.env.PWD;
        res.sendFile('index.html', { root: path.join(__dirname, './client/build') }); // Render client
    });
};

export default routes;
