/* The architecture is as follows:
 *  - This page will house the `app` redux state
 *  - It will render the default layout (for nav bar)
 *  - The layout will render a nav bar and the page/index.tsx (router)
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { InitialStateType as AppPropTypes } from '../reducers/AppReducer';
import MainTemplate from './layout';

export type PublicProps = {};

export type ReduxProps = {
    app: AppPropTypes;
    setLoginRedirect: (url: string) => void;
    logout: () => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class App extends React.Component<Props, State> {
    render() {
        return <MainTemplate app={this.props.app} />;
    }
}

const mapStateToProps = (state: any) => {
    const toolState = state;
    return {
        app: toolState.app,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        logout: () => dispatch(() => {}),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(App) as any,
) as React.ComponentClass<PublicProps>;
