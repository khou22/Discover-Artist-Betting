// server/routes/index.js
// API route that maps functionality
import * as express from 'express';
import * as path from 'path';
import ExampleRoutes from './exampleRoutes';

// Requires an app as an input so can direct the user accordingly
const routes = (app: express.Application): void => {
    // Modular routes
    ExampleRoutes(app);

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
