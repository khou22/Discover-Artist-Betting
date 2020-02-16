import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Feed, Icon } from 'semantic-ui-react';
import { getTransactions } from '../../../actions/transactions';
import { InitialStateType as TransactionsInitialStateType } from '../../../reducers/TransactionsReducer';
import { timeSince } from '../../../utils/DateHelper';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    transactions: TransactionsInitialStateType;
    getTransactions: () => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class RightMenuOne extends React.Component<Props, State> {
    componentDidMount() {
        const { getTransactions } = this.props;
        getTransactions();
    }

    render() {
        const {
            transactions: { transactions },
        } = this.props;

        const transactionFeedNodes = transactions.map((transaction) => {
            return (
                <Feed.Event key={transaction.id}>
                    <Feed.Label>
                        <img src={transaction.artist.image} />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Link to={`/user/${transaction.userId}`}>
                                <Feed.User>{transaction.user.firstName}</Feed.User>
                            </Link>{' '}
                            bet on{' '}
                            <Link to={`/artist/${transaction.artistId}`}>
                                {transaction.artist.name}
                            </Link>
                            <Feed.Date>{timeSince(new Date(transaction.date))} ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="play circle" />
                                {transaction.artist.monthlyListens}
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            );
        });

        return (
            <div className="rightMenu1-content">
                <Feed>{transactionFeedNodes}</Feed>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        transactions: state.transactions,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        getTransactions: () => dispatch(getTransactions()),
    };
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(RightMenuOne) as any) as React.ComponentClass<PublicProps>;
