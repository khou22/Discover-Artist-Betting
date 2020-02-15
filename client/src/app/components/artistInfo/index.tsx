import * as React from 'react';
import { Card, Header } from 'semantic-ui-react';
export type PublicProps = {};
import StockChart from '../stockChart';
import ArtistInfoCard from '../artistInfoCard';
import './styles.scss';

export type Props = PublicProps;

function ArtistInfo({}: Props) {
    return (
        <div className="artistInfo-content">
            <Card.Group className="artistInfo-content-cardGrid">
                <Card>
                    <div className="artistInfo-content-card">
                        <Header>Monthly Listeners</Header>
                    </div>
                </Card>
                <Card>
                    <div className="artistInfo-content-card">
                        <Header>Top Songs</Header>
                    </div>
                </Card>
                <Card>
                    <div className="artistInfo-content-card">
                        <Header>Twitter Feed</Header>
                    </div>
                </Card>
            </Card.Group>
            <StockChart></StockChart>
        </div>
    );
}

export default ArtistInfo;
