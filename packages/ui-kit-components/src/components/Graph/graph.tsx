import * as React from 'react';
import CandleChart from './candle';
import BarChart from './bar';
import LineChart from './line';

type ChartName = 'line' | 'bar' | 'candle';

export interface GraphProps {
  xAxisStep: number;
  yAxisStep: number;
  dataset: number[];
  labels: string[];
  previousPrice: number;
  currentPrice: number;
  isUp: boolean;
  chartName: ChartName;
}

const Graph: React.FC<GraphProps> = ({
  dataset,
  labels,
  xAxisStep = 60,
  yAxisStep = 50,
  previousPrice = 0,
  currentPrice = 0,
  isUp,
  chartName,
}) => {
  if (chartName === 'line') {
    return (
      <LineChart
        data={[dataset]}
        labels={labels}
        xLabelStep={xAxisStep}
        yLabelStep={yAxisStep}
        previousData={previousPrice}
        currentData={currentPrice}
        isUp={isUp}
      />
    );
  } else if (chartName === 'bar') {
    return (
      <BarChart
        dataset={dataset}
        labels={labels}
        xAxisStep={xAxisStep}
        yAxisStep={yAxisStep}
        previousPrice={previousPrice}
        currentPrice={currentPrice}
        isUp={isUp}
      />
    );
  } else {
    return (
      <CandleChart
        dataset={dataset}
        labels={labels}
        xAxisStep={xAxisStep}
        yAxisStep={yAxisStep}
        previousPrice={previousPrice}
        currentPrice={currentPrice}
        isUp={isUp}
      />
    );
  }
};

export default Graph;
