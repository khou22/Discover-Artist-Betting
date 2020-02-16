import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Header, Loader } from 'semantic-ui-react';
import { getUser } from '../../actions/user';
import { InitialStateType as AppInitialStateType } from '../../reducers/AppReducer';
import { InitialStateType as UserInitialStateType } from '../../reducers/UserReducer';
import FeedExampleBasic from './feed';

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
                <Header as="h1">Kevin {app.someStateValue}</Header>
                <p>{user.firstName}</p>
                <FeedExampleBasic />
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
