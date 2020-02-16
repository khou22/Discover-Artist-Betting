import { RequestType } from '../../../utils/Host';
import Host from '../../host';
import { GetArtistRequest } from '../../types/Requests';
import { GetArtistResponse } from '../../types/Responses';

export const GET_ARTIST_RESOURCE = 'user';
export default (request: GetArtistRequest) =>
    Host.fire(`${GET_ARTIST_RESOURCE}/${request.id}`, RequestType.GET, {}) as Promise<
        GetArtistResponse
    >;
