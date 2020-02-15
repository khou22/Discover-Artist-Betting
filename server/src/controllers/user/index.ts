import * as express from 'express';
import User from '../../models/user';

export interface UserGetRequest extends express.Request {
    id: string;
}

export const getUser = (req: UserGetRequest, res: express.Response): any => {
    const { id } = req.params;
    return User.findById(id)
        .then((user: User): express.Response => res.status(200).send(user))
        .catch((error: Error): express.Response => res.status(400).send(error)); // Error
};
