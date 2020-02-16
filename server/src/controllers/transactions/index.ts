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
