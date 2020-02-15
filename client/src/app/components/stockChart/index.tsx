import * as React from 'react';
import './styles.scss';
import { Card } from 'semantic-ui-react';
export type PublicProps = {};

export type Props = PublicProps;

function StockChart({}: Props) {
    return (
        <div className="stockChart-content">
            <Card className="stockChart-content-card">
                <img className="stockChart-content-img" src="https://i.imgur.com/4rDartn.png"></img>
            </Card>
        </div>
    );
}

export default StockChart;
