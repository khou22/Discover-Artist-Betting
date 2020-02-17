import * as express from 'express';
import Artist from '../../models/artist';
import Transaction from '../../models/transaction';
import User from '../../models/user';

export const getTransactions = (req: express.Request, res: express.Response): any => {
    return Transaction.findAll({
        include: [User, Artist],
        limit: 10,
        order: [['date', 'DESC']],
    })
        .then(
            (transactions: Transaction[]): express.Response =>
                res.status(200).send({ success: true, transactions }),
        )
        .catch((error: Error): express.Response => res.status(400).send({ success: false, error })); // Error
};

export interface CreateTransaction extends express.Request {
    body: {
        artistId: number;
        priceId: number;
    };
}

export const createTransaction = (req: CreateTransaction, res: express.Response): any => {
    const {
        body: { artistId, priceId },
    } = req;
    return Transaction.create({
        date: new Date(),
        userId: 1,
        artistId,
        priceId,
    })
        .then(
            (transaction): express.Response => res.status(200).send({ success: true, transaction }),
        )
        .catch((error: Error): express.Response => res.status(400).send({ success: false, error })); // Error
};
