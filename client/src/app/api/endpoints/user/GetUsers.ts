import { RequestType } from '../../../utils/Host';
import Host from '../../host';
import { EmptyRequest } from '../../types/Requests';
import { GetUsersResponse } from '../../types/Responses';

export const GET_ARTIST_RESOURCE = 'friends';
export default (request: EmptyRequest) =>
    Host.fire(GET_ARTIST_RESOURCE, RequestType.GET, {}) as Promise<GetUsersResponse>;
