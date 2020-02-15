import * as express from 'express';
import { getArtistById, getArtists } from '../controllers/artist';

export default (app: express.Application) => {
    app.get('/api/artist/', getArtists);

    app.get('/api/artist/:id', getArtistById);
};
