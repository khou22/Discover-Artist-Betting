import GetArtist from '../api/endpoints/artist/GetArtist';
import GetArtists from '../api/endpoints/artist/GetArtists';
import { GetArtistRequest } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const getArtist = (id: string) => {
    const request: GetArtistRequest = {
        id,
    };
    return {
        type: Actions.GET_ARTIST_BY_ID,
        promise: GetArtist(request),
    };
};

export const getArtists = () => {
    return {
        type: Actions.GET_ARTISTS,
        promise: GetArtists({}),
    };
};
