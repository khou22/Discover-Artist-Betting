import { scaleTime } from 'd3-scale';
import { utcDay } from 'd3-time';
import React from 'react';
import { Chart, ChartCanvas } from 'react-stockcharts';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import {
    createVerticalLinearGradient,
    hexToRGBA,
    last,
    timeIntervalBarWidth,
} from 'react-stockcharts/lib/utils';

const canvasGradient = createVerticalLinearGradient([
    { stop: 0, color: hexToRGBA('#b5d0ff', 0.2) },
    { stop: 0.7, color: hexToRGBA('#6fa4fc', 0.4) },
    { stop: 1, color: hexToRGBA('#4286f4', 0.8) },
]);

type Props = {
    data: any;
    type: string;
    width: number;
    ratio: number;
    firstPrice: any;
    lastPrice: any;
};

class AreaChart extends React.Component<Props> {
    render() {
        const { type, width, data, ratio } = this.props;
        const xAccessor = (d) => d.date;
        const xExtents = [xAccessor(last(data)), xAccessor(data[data.length - 100])];
        return (
            <ChartCanvas
                height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                type={type}
                seriesName="MSFT"
                data={data}
                xAccessor={xAccessor}
                xScale={scaleTime()}
                xExtents={xExtents}
            >
                <Chart id={1} yExtents={(d) => [d.high, d.low]}>
                    <XAxis axisAt="bottom" orient="bottom" ticks={6} />
                    <YAxis axisAt="left" orient="left" ticks={5} />
                    <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
                </Chart>
            </ChartCanvas>
        );
        /*
        const { data, type, width, ratio, firstPrice, lastPrice } = this.props;
        console.log(data);

        return (
            <ChartCanvas
                ratio={ratio}
                width={width}
                height={400}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                seriesName="MSFT"
                data={data}
                type={type}
                displayXAccessor={(d) => d.date}
                xAccessor={(d) => {
                    if (!d) return '';
                    return d.date;
                }}
                xScale={scaleTime()}
                xExtents={[firstPrice.date, lastPrice.date]}
            >
                <Chart id={0} yExtents={(d) => d.close}>
                    <defs>
                        <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
                            <stop offset="0%" stopColor="#b5d0ff" stopOpacity={0.2} />
                            <stop offset="70%" stopColor="#6fa4fc" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#4286f4" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <XAxis axisAt="bottom" orient="bottom" ticks={6} />
                    <YAxis axisAt="left" orient="left" />
                    <AreaSeries
                        yAccessor={(d) => d.close}
                        fill="url(#MyGradient)"
                        strokeWidth={2}
                        interpolation={curveMonotoneX}
                        canvasGradient={canvasGradient}
                    />
                </Chart>
            </ChartCanvas>
        );
        */
    }
}

export default AreaChart;
