import GetTransactions from '../api/endpoints/transactions/GetTransactions';
import * as Actions from '../constants/ReduxActions';

export const getTransactions = () => {
    return {
        type: Actions.GET_TRANSACTIONS,
        promise: GetTransactions({}),
    };
};
