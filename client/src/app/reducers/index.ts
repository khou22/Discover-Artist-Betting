import AppReducer from './AppReducer';
import ArtistReducer from './ArtistReducer';
import BrowseReducer from './BrowseReducer';
import FriendReducer from './FriendReducer';
import TransactionsReducer from './TransactionsReducer';
import UserReducer from './UserReducer';

export default {
    app: AppReducer,
    artist: ArtistReducer,
    browse: BrowseReducer,
    user: UserReducer,
    friend: FriendReducer,
    transactions: TransactionsReducer,
};
