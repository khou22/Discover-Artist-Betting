import GetUsers from '../api/endpoints/user/GetUsers';
import * as Actions from '../constants/ReduxActions';

export const getFriends = () => {
    return {
        type: Actions.GET_FRIENDS,
        promise: GetUsers({}),
    };
};
