import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import Home from '../home';
import PageOne from '../page1';
import './styles.scss';

export type PublicProps = {
    app: AppPropTypes;
};

type State = {};

export type Props = PublicProps & RouteComponentProps;

class AppPageComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="page-content">
                <Switch>
                    <Route path="/page1" render={() => <PageOne />} />
                    <Route path="/" render={() => <Home />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppPageComponent) as React.ComponentClass<PublicProps>;
