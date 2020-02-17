import * as express from 'express';
import Artist from '../../models/artist';
import Price from '../../models/price';
import Transaction from '../../models/transaction';
import User from '../../models/user';

const getScore = (user: User): number => {
    let score = 0;
    user.transactions.forEach((transaction) => {
        score += transaction.artist.monthlyListens - transaction.price.price;
    });

    return score;
};

export interface UserGetRequest extends express.Request {
    id: string;
}

export const getUser = (req: UserGetRequest, res: express.Response): any => {
    const { id } = req.params;
    return User.findById(id, {
        include: [
            {
                model: Transaction,
                include: [Price, Artist],
            },
        ],
    })
        .then(
            (user: User): express.Response =>
                res.status(200).send({
                    success: true,
                    score: getScore(user),
                    user: user,
                }),
        )
        .catch(
            (error: Error): express.Response => {
                console.log(error);

                return res.status(400).send({ success: false, error });
            },
        ); // Error
};

export const getFriends = (req: express.Request, res: express.Response): any => {
    return User.findAll({
        include: [
            {
                model: Transaction,
                include: [Price, Artist],
            },
        ],
    })
        .then(
            (users: User[]): express.Response =>
                res.status(200).send({
                    success: true,
                    users: users
                        // .filter((user) => user.id != 1)
                        .map((user) => ({
                            user,
                            score: getScore(user),
                        })),
                }),
        )
        .catch((error: Error): express.Response => res.status(400).send({ success: false, error })); // Error
};
