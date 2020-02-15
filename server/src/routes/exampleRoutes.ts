import * as express from 'express';
import { getUser } from '../controllers/user';

export default (app: express.Application): void => {
    app.get('/api/user/:id', getUser);
};
