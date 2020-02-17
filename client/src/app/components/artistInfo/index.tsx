import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { Button, Card, Header, Image, Loader } from 'semantic-ui-react';
import { getArtist } from '../../actions/artist';
import { createTransaction } from '../../actions/transactions';
import { InitialStateType as ArtistInitialStateType } from '../../reducers/ArtistReducer';
import StockChart from '../stockChart';
import './styles.scss';

export type PublicProps = {};

export type ReduxProps = {
    artist: ArtistInitialStateType;
    getArtist: (id: string) => void;
    createTransaction: (artistId: number, priceId: number) => void;
};

type State = {};

type RouteParams = { id: string };

export type Props = PublicProps & ReduxProps & RouteComponentProps<RouteParams>;

class ArtistInfo extends React.Component<Props, State> {
    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            getArtist,
        } = this.props;
        getArtist(id);
    }

    buy = (artistId: number, priceId: number) => {
        const { createTransaction, history } = this.props;
        createTransaction(artistId, priceId);

        setTimeout(() => {
            history.push('/user');
        }, 2000);
    };

    render() {
        const {
            artist: { isLoading, didError, error, artist },
            createTransaction,
        } = this.props;
        if (isLoading || !artist) return <Loader />;

        if (didError) return <Header>{error}</Header>;

        // MARK: Artist object is loaded
        const { image, name, monthlyListens, tracks } = artist;

        const latestPrice = artist.prices[artist.prices.length - 1];
        console.log(latestPrice);

        return (
            <div className="artistInfo-content">
                <div className="artistInfo-content-heading">
                    <div className="artistInfo-content-img">
                        <Image src={image} alt="avatar" size="tiny" circular></Image>

                        <Button onClick={() => this.buy(artist.id, latestPrice.id)}>Buy</Button>
                    </div>
                    <div className="artistInfo-content-name">
                        <Header size="huge">{name}</Header>
                    </div>
                </div>
                <Card.Group className="artistInfo-content-cardGrid">
                    <Card>
                        <div className="artistInfo-content-card">
                            <Header>Monthly Listeners: {monthlyListens}</Header>
                        </div>
                    </Card>
                    <Card>
                        <div className="artistInfo-content-card">
                            <Header>Top Songs: {tracks.length}</Header>
                        </div>
                    </Card>
                    <Card>
                        <div className="artistInfo-content-card">
                            <div>
                                <Header>Verified</Header>
                            </div>

                            <div className="artistInfo-content-verify">
                                <Image
                                    src="https://i.imgur.com/QrZRhoM.png"
                                    circular
                                    size="mini"
                                ></Image>
                            </div>
                        </div>
                    </Card>
                </Card.Group>
                <StockChart></StockChart>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        artist: state.artist,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        getArtist: (id: string) => dispatch(getArtist(id)),
        createTransaction: (artistId: number, priceId: number) =>
            dispatch(createTransaction(artistId, priceId)),
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ArtistInfo) as any,
) as React.ComponentClass<PublicProps>;
