import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { getFriends } from '../../actions/friends';
// import { Header } from 'semantic-ui-react';
import { InitialStateType as FriendInitialStateType } from '../../reducers/FriendReducer';

export type PublicProps = {};

export type ReduxProps = {
    friend: FriendInitialStateType;
    getFriends: () => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class FriendsPage extends React.Component<Props, State> {
    componentDidMount() {
        const { getFriends } = this.props;
        getFriends();
    }

    render() {
        const { friend } = this.props;
        return <div>Friends {friend.users.length}</div>;
    }
}

function mapStateToProps(state: any) {
    return {
        friend: state.friend,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        getFriends: () => dispatch(getFriends()),
    };
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(FriendsPage) as any) as React.ComponentClass<PublicProps>;
