import { RequestType } from '../../../utils/Host';
import Host from '../../host';
import { EmptyRequest } from '../../types/Requests';
import { GetArtistsResponse } from '../../types/Responses';

export const GET_ARTIST_RESOURCE = 'artist/browse';
export default (request: EmptyRequest) =>
    Host.fire(GET_ARTIST_RESOURCE, RequestType.GET, {}) as Promise<GetArtistsResponse>;
