import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Feed, Header, Icon, Segment } from 'semantic-ui-react';
import { getFriends } from '../../actions/friends';
// import { Header } from 'semantic-ui-react';
import { InitialStateType as FriendInitialStateType } from '../../reducers/FriendReducer';
import { timeSince } from '../../utils/DateHelper';

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
        const {
            friend: { users },
        } = this.props;

        const friendNodes = users
            .sort((a, b) => b.score - a.score)
            .map((user) => {
                return (
                    <Feed.Event key={user.id}>
                        <Feed.Label>
                            <img src={`https://i.pravatar.cc/100?${user.id}`} />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>
                                    {user.firstName} {user.lastName}
                                </Feed.User>
                                <Feed.Date>{timeSince(new Date(user.createdAt))}</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name="play" />
                                    {user.score}
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                );
            });

        return (
            <div>
                <Segment>
                    <Header as="h1">Leaderboard</Header>
                    <Feed>{friendNodes}</Feed>
                </Segment>
            </div>
        );
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
