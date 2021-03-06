import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Header } from 'semantic-ui-react';
// import { Header } from 'semantic-ui-react';
import { InitialStateType as AppInitialStateType } from '../../reducers/AppReducer';

export type PublicProps = {};

export type ReduxProps = {
    app: AppInitialStateType;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class HomePage extends React.Component<Props, State> {
    render() {
        const { app } = this.props;
        return (
            <div>
                <Header as="h1">Home Page {app.someStateValue}</Header>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        app: state.app,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {};
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage) as any) as React.ComponentClass<PublicProps>;
