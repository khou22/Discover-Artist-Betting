import * as express from 'express';
import Artist from '../../models/artist';
import Price from '../../models/price';

const stripPrice = (price: Price) => ({
    date: price.date,
    price: price.price,
});

export const getArtists = (req: express.Request, res: express.Response): any => {
    return Artist.findAll({ include: [Price] })
        .then(
            (artists: Artist[]): express.Response => {
                const data = artists.map((artist: Artist) => ({
                    ...artist.dataValues,
                    prices: artist.prices.map((price) => stripPrice(price)),
                }));
                return res.status(200).send(data);
            },
        )
        .catch((error: Error): express.Response => res.status(400).send(error)); // Error
};
