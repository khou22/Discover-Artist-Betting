import * as express from 'express';
import Artist from '../../models/artist';
import Price from '../../models/price';
import Track from '../../models/track';
import { stripPrice } from '../price';

export const getBrowseArtists = (req: express.Request, res: express.Response): any => {
    return Artist.findAll()
        .then(
            (artists: Artist[]): express.Response => {
                return res.status(200).send({
                    success: true,
                    artists,
                });
            },
        )
        .catch((error: Error): express.Response => res.status(400).send(error)); // Error
};

export const getArtists = (req: express.Request, res: express.Response): any => {
    return Artist.findAll({ include: [Price, Track] })
        .then(
            (artists: Artist[]): express.Response => {
                const data = artists.map((artist: Artist) => ({
                    ...artist.dataValues,
                    prices: artist.prices.map((price) => stripPrice(price)),
                }));
                return res.status(200).send({
                    success: true,
                    artists: data,
                });
            },
        )
        .catch((error: Error): express.Response => res.status(400).send(error)); // Error
};

export interface ArtistGetRequest extends express.Request {
    id: string;
}

export const getArtistById = (req: ArtistGetRequest, res: express.Response): any => {
    const { id } = req.params;
    return Artist.findById(id, { include: [Price, Track] })
        .then(
            (artist: Artist): express.Response => {
                const data = {
                    ...artist.dataValues,
                    prices: artist.prices.map((price) => stripPrice(price)),
                };
                return res.status(200).send({
                    success: true,
                    artist: data,
                });
            },
        )
        .catch(
            (error: Error): express.Response =>
                res.status(400).send({
                    success: false,
                    error,
                }),
        ); // Error
};
