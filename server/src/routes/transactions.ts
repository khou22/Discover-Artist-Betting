import * as express from 'express';
import { getTransactions } from '../controllers/transactions';

export default (app: express.Application): void => {
    app.get('/api/transactions/', getTransactions);
};
