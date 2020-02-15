import * as React from 'react';
import { Card, Header } from 'semantic-ui-react';
export type PublicProps = {};
import StockChart from '../stockChart';
import './styles.scss';

export type Props = PublicProps;

type CardProps = {
    header: string;
};

function ArtistInfoCard({ header }: CardProps) {
    return (
        <Card className="artistInfo-content-card">
            <div>
                <Header>{header}</Header>
            </div>
        </Card>
    );
}

export default ArtistInfoCard;
