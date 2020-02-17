import * as express from 'express';
import { createTransaction, getTransactions } from '../controllers/transactions';

export default (app: express.Application): void => {
    app.get('/api/transactions/', getTransactions);
    app.post('/api/transactions/', createTransaction);
};
