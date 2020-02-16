import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Header, Menu, Search } from 'semantic-ui-react';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import './styles.scss';

export type PublicProps = {
    app: AppPropTypes;
};

export type Props = PublicProps & RouteComponentProps;

function NavigationBar({ app, location: routeLocation }: Props) {
    return (
        <div className="navBar-content">
            <Menu pointing secondary>
                <div className="navBar-content-menu">
                    <div className="navBar-content-search">
                        <Search></Search>
                    </div>
                    <Menu.Item active={routeLocation.pathname === '/artist'}>
                        <Link to={'/artist'}>Artist</Link>
                    </Menu.Item>
                    <Menu.Item active={routeLocation.pathname === '/user'}>
                        <Link to={'/user'}>
                            <div className="navBar-content-profile">
                                <img
                                    className="navBar-content-img"
                                    src="https://i.imgur.com/AhXp5Cd.png"
                                ></img>
                                <Header as="h3" className="rightMenu1-content-name">
                                    Kevin Hou
                                </Header>
                            </div>
                        </Link>
                    </Menu.Item>
                </div>
            </Menu>
        </div>
    );
}

export default withRouter(NavigationBar) as React.ComponentType<PublicProps>;
