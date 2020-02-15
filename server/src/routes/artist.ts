import * as express from 'express';
import { getArtists } from '../controllers/artist';

export default (app: express.Application) => {
    // Contact form email
    app.get('/api/artist/', getArtists);
};
