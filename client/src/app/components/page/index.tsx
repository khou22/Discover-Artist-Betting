import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
// import Home from '../home';
// import PageOne from '../page1';
import './styles.scss';
import { Header } from 'semantic-ui-react';

export type PublicProps = {
    app: AppPropTypes;
};

type State = {};

export type Props = PublicProps & RouteComponentProps;

class AppPageComponent extends React.Component<Props, State> {
    render() {
        return (
            <div className="page-content">
                {/* <Switch>
                    <Route path="/page1" render={() => <PageOne />} />
                    <Route path="/" render={() => <Home />} />
                </Switch> */}
                <div className="page-content-heading">
                    <img
                        src="https://i.imgur.com/mMqVYiR.jpg"
                        className="page-content-img"
                        alt="avatar"
                    ></img>
                    <Header size="huge" className="page-content-name">
                        Selena Gomez
                    </Header>
                </div>
            </div>
        );
    }
}

export default withRouter(AppPageComponent) as React.ComponentClass<PublicProps>;
