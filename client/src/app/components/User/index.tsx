import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Header, Loader, Statistic, Item, Divider, Image } from 'semantic-ui-react';
import { getUser } from '../../actions/user';
import { InitialStateType as AppInitialStateType } from '../../reducers/AppReducer';
import { InitialStateType as UserInitialStateType } from '../../reducers/UserReducer';
import FeedExampleBasic from './feed';
import moment from 'moment';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    app: AppInitialStateType;
    user: UserInitialStateType;
    getUser: (id: string) => void;
};

type State = {};

type RouteParams = { id: string };

export type Props = PublicProps & ReduxProps & RouteComponentProps<RouteParams>;

class User extends React.Component<Props, State> {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            getUser,
        } = this.props;

        getUser(id || '1');
    }

    render() {
        const {
            app,
            user: { user, isLoading },
        } = this.props;

        if (isLoading || !user) return <Loader />;

        return (
            <div>
                <div className="user-content-header">
                    <div className="user-content-profile">
                        <div className="user-content-img">
                            <Image src="https://i.imgur.com/AhXp5Cd.png" size="tiny"></Image>
                        </div>
                        <div>
                            <Header as="h1">
                                {user.firstName} {app.someStateValue}
                            </Header>
                        </div>
                    </div>
                    <Statistic>
                        <Statistic.Label>Credibility</Statistic.Label>
                        <Statistic.Value>{user.score}</Statistic.Value>
                    </Statistic>
                </div>
                <br></br>
                <Divider horizontal>Details</Divider>
                <br></br>
                <div className="user-content-details">
                    <div className="user-content-transaction">
                        <Header as="h2">Recent Transactions</Header>
                        <Item.Group>
                            {user.transactions
                                .slice(6)
                                .sort(function(left, right) {
                                    return moment.utc(left.date).diff(moment.utc(right.date));
                                })
                                .map((transaction) => {
                                    return (
                                        <Item>
                                            <Item.Image
                                                size="tiny"
                                                src={transaction.artist.image}
                                                circular
                                            />
                                            <Item.Content>
                                                <Item.Header>
                                                    {transaction.date.toString().substring(0, 10)}
                                                </Item.Header>
                                                <Item.Meta>
                                                    <span className="stay">
                                                        Artist: {transaction.artist.name}
                                                    </span>
                                                </Item.Meta>
                                                <Item.Description>
                                                    {' '}
                                                    Price: ${transaction.price.price}
                                                </Item.Description>
                                            </Item.Content>
                                        </Item>
                                    );
                                })}
                        </Item.Group>
                    </div>
                    <FeedExampleBasic />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        app: state.app,
        user: state.user,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        getUser: (id: string) => dispatch(getUser(id)),
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(User) as any,
) as React.ComponentClass<PublicProps>;
