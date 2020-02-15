import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';

export type PublicProps = {
    app: AppPropTypes;
};

export type Props = PublicProps & RouteComponentProps;

function NavigationBar({ app, location: routeLocation }: Props) {
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item active={routeLocation.pathname === '/'}>
                    <Link to={'/'}>Home</Link>
                </Menu.Item>
                <Menu.Item active={routeLocation.pathname === '/page1'}>
                    <Link to={'/page1'}>Page One</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default withRouter(NavigationBar) as React.ComponentType<PublicProps>;
