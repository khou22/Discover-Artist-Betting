import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import { Menu, Search } from 'semantic-ui-react';
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
                {/* <Menu.Item active={routeLocation.pathname === '/'}>
                    <Link to={'/'}>Home</Link>
                </Menu.Item>
                <Menu.Item active={routeLocation.pathname === '/page1'}>
                    <Link to={'/page1'}>Page One</Link>
                </Menu.Item> */}
                <Search className="navBar-content-search"></Search>
            </Menu>
        </div>
    );
}

export default withRouter(NavigationBar) as React.ComponentType<PublicProps>;
