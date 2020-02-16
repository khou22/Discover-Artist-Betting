import { RequestType } from '../../../utils/Host';
import Host from '../../host';
import { EmptyRequest } from '../../types/Requests';
import { GetTransactionsResponse } from '../../types/Responses';

export const GET_TRANSACTIONS_RESOURCE = 'transactions';
export default (request: EmptyRequest) =>
    Host.fire(GET_TRANSACTIONS_RESOURCE, RequestType.GET, {}) as Promise<GetTransactionsResponse>;
