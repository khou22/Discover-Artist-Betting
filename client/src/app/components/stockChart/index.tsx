import * as React from 'react';
import * as Models from '../../models';
import Chart from './chart';
import './styles.scss';

export type PublicProps = {
    prices: Models.Price[];
};

export type Props = PublicProps;

function StockChart({ prices }: Props) {
    let data = prices
        .map((price: Models.Price) => ({
            date: price.date,
            close: price.price,
            open: price.price,
            high: price.price,
            low: price.price,
            volume: price.price,
        }))
        .sort((a, b) => +a.date - +b.date)
        .reverse()
        .filter((a) => a.date);
    data = data.slice(0, 500);

    const firstPrice = data[0];
    const lastPrice = data[data.length - 1];

    console.log(firstPrice);
    console.log(lastPrice);

    return (
        <div className="stockChart-content">
            {/* <Card className="stockChart-content-card"> */}
            <Chart
                type="hybrid"
                data={data}
                width={500}
                ratio={1.5}
                firstPrice={firstPrice}
                lastPrice={lastPrice}
            />
            {/* </Card> */}
        </div>
    );
}

export default StockChart;
