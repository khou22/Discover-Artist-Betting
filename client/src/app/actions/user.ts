import GetUser from '../api/endpoints/user/GetUser';
import { GetArtistRequest } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const getUser = (id: string) => {
    const request: GetArtistRequest = {
        id,
    };
    return {
        type: Actions.GET_USER_BY_ID,
        promise: GetUser(request),
    };
};
