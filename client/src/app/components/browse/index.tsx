import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Card, Header, Loader } from 'semantic-ui-react';
import { getArtists } from '../../actions/artist';
import * as Models from '../../models';
// import { Header } from 'semantic-ui-react';
import { InitialStateType as BrowseInitialStateType } from '../../reducers/BrowseReducer';
import Album from '../shared/album';

export type PublicProps = {};

export type ReduxProps = {
    browse: BrowseInitialStateType;
    getArtists: () => void;
};

type State = {};

export type Props = PublicProps & ReduxProps & RouteComponentProps;

class BrowsePage extends React.Component<Props, State> {
    componentDidMount() {
        const { getArtists } = this.props;
        getArtists();
    }

    navigateToArtist = (artist: Models.Artist) => {
        const { history } = this.props;
        history.push(`/artist/${artist.id}`);
    };

    render() {
        const {
            browse: { isLoading, didError, artists },
        } = this.props;

        if (isLoading) return <Loader />;

        const artistNodes = artists.map((artist) => {
            return (
                <Album
                    key={artist.id}
                    artist={artist}
                    onClick={() => this.navigateToArtist(artist)}
                />
            );
        });

        return (
            <div>
                <Header as="h1">Browse ({artists.length})</Header>
                <Card.Group itemsPerRow={4}>{artistNodes}</Card.Group>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        app: state.app,
        browse: state.browse,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        getArtists: () => dispatch(getArtists()),
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BrowsePage) as any,
) as React.ComponentClass<PublicProps>;
