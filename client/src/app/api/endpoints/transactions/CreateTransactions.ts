import { RequestType } from '../../../utils/Host';
import Host from '../../host';
import { CreateTransactionsRequest } from '../../types/Requests';
import { GetTransactionsResponse } from '../../types/Responses';

export const CREATE_TRANSACTIONS_REQUEST = 'transactions';
export default (request: CreateTransactionsRequest) =>
    Host.fire(CREATE_TRANSACTIONS_REQUEST, RequestType.POST, request) as Promise<
        GetTransactionsResponse
    >;
