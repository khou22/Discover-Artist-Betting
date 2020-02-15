import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Header } from 'semantic-ui-react';

export type PublicProps = {};

export type ReduxProps = {};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Header as="h1">Home Page</Header>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {};
}

export default (connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage) as any) as React.ComponentClass<PublicProps>;
