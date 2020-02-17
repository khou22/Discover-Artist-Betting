import CreateTransaction from '../api/endpoints/transactions/CreateTransactions';
import GetTransactions from '../api/endpoints/transactions/GetTransactions';
import { CreateTransactionsRequest } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const getTransactions = () => {
    return {
        type: Actions.GET_TRANSACTIONS,
        promise: GetTransactions({}),
    };
};

export const createTransaction = (artistId: number, priceId: number) => {
    const request: CreateTransactionsRequest = {
        artistId,
        priceId,
    };
    return {
        type: Actions.CREATE_TRANSACTIONS,
        promise: CreateTransaction(request),
    };
};
