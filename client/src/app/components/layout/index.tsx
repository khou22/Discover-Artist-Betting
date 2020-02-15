import * as React from 'react';
import { InitialStateType as AppPropTypes } from '../../reducers/AppReducer';
import AppRouterComponent from '../page';
import NavigationBar from '../partials';
import './styles.scss';
import LeftMenuOne from '../leftMenu1';
import RightMenuOne from '../rightMenu1';
import ArtistInfo from '../artistInfo';
import { Header } from 'semantic-ui-react';

export type PublicProps = {
    app: AppPropTypes;
};

export type Props = PublicProps;

type State = {};

class DefaultLayout extends React.Component<Props, State> {
    render() {
        const { app } = this.props;
        return (
            <div className="layout-content">
                <div className="layout-content-left">
                    <LeftMenuOne></LeftMenuOne>
                </div>
                <div className="layout-content-divider-left"></div>
                <div className="layout-content-center">
                    <NavigationBar app={app} />
                    <AppRouterComponent app={app} />
                    <ArtistInfo></ArtistInfo>
                </div>
                <div className="layout-content-divider-right"></div>
                <div className="layout-content-right">
                    <RightMenuOne></RightMenuOne>
                </div>
            </div>
        );
    }
}

export default DefaultLayout as React.ComponentClass<PublicProps>;
