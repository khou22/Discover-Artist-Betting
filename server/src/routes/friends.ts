import * as express from 'express';
import { getFriends } from '../controllers/user';

export default (app: express.Application): void => {
    app.get('/api/friends', getFriends);
};
