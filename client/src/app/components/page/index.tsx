import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
// import Home from '../home';
import ArtistInfo from '../artistInfo';
import Browse from '../browse';
import Friends from '../friends';
import Home from '../home';
import User from '../User';
import './styles.scss';
// import { Header } from 'semantic-ui-react';

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
                    <Route exact path="/artist/:id" render={() => <ArtistInfo />} />
                    <Route exact path="/user/:id" render={() => <User />} />
                    <Route path="/user" render={() => <User />} />
                    <Route path="/browse" render={() => <Browse />} />
                    <Route path="/friends" render={() => <Friends />} />
                    <Route path="/" render={() => <Home />} />
                </Switch>
                {/* need to move this into artist info */}
                {/* <div className="page-content-heading">
                    <img
                        src="https://i.imgur.com/mMqVYiR.jpg"
                        className="page-content-img"
                        alt="avatar"
                    ></img>
                    <Header size="huge" className="page-content-name">
                        Selena Gomez
                    </Header>
                </div> */}
            </div>
        );
    }
}

export default withRouter(AppPageComponent) as React.ComponentClass<PublicProps>;
