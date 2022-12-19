import { createTheme, Palette, ThemeProvider } from '@mui/material';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Graph from './graph';

import { convertLabels, getData, generateBackgroundColorBoxes } from './graph-utils';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

jest.mock('./graph-utils', () => {
  const originalModule = jest.requireActual('./graph-utils');
  return {
    __esModule: true,
    ...originalModule,
    registerPlugins: () => null,
  };
});

describe('Graph component tests', () => {
  describe('When loading prop is set', () => {
    beforeAll(() =>
      render(
        <Graph
          isUp={true}
          loading={true}
          data={[[2, 3]]}
          labels={['1', '2']}
          yLabelStep={50}
          xLabelStep={60}
        />,
      ),
    );

    it('Renders a LinearProgress', () => {
      expect(screen.queryByTestId('loading')).toBeInTheDocument();
    });
  });

  describe('When loading prop is not set', () => {
    beforeAll(() => {
      render(
        <Graph
          isUp={true}
          data={[[2, 3]]}
          labels={['9:00', '10:00']}
          yLabelStep={50}
          xLabelStep={60}
        />,
      );
    });

    it('Does not render a LinearProgress', () => {
      expect(screen.queryByTestId('loading')).toBeNull();
    });
  });
});

describe('Graph utility function tests', () => {
  const labels = [
    '9:00',
    '9:30',
    '9:45',
    '10:00',
    '10:10',
    '10:30',
    '11:01',
    '11:35',
    '11:59',
  ];
  const theme = createTheme({ palette: { mode: 'light' } });
  describe('convertLabels', () => {
    describe('Given a list of minute:hour labels and a step interval', () => {
      it('Sets label as empty when it the label time does not fit the step interval from the first label, unless the label is last', () => {
        expect(convertLabels(labels, 30)).toEqual([
          '9:00',
          '9:30',
          '',
          '10:00',
          '',
          '10:30',
          '',
          '',
          '11:59',
        ]);
        expect(convertLabels(labels, 15)).toEqual([
          '9:00',
          '9:30',
          '9:45',
          '10:00',
          '',
          '10:30',
          '',
          '',
          '11:59',
        ]);
        expect(convertLabels(labels, 60)).toEqual([
          '9:00',
          '',
          '',
          '10:00',
          '',
          '',
          '',
          '',
          '11:59',
        ]);
      });
    });
  });

  describe('getData', () => {
    describe('Given a list of labels, a collection of data lists, and a palette', () => {
      const data = [[1, 2, 3, 4]];
      const result = getData(labels, data, theme.palette);

      it('Converts the labels with a 00 minute value to show the hour number only', () => {
        expect(result.labels).toEqual([
          '9',
          '9:30',
          '9:45',
          '10',
          '10:10',
          '10:30',
          '11:01',
          '11:35',
          '11:59',
        ]);
      });

      it('Sets the dataset border-color to the theme primary.main color', () => {
        expect(result.datasets[0].borderColor).toBe(theme.palette.primary.main);
      });

      describe('When the data array has two lists of data', () => {
        const data = [
          [1, 2, 3, 4],
          [4, 5, 6, 7],
        ];
        const result = getData(labels, data, theme.palette);

        it('Returns an object with two datasets', () => {
          expect(result.datasets.length).toBe(2);
        });
      });
    });
  });

  describe('generateBackgroundColorBoxes', () => {
    describe('Given a list of converted labels, step value, and palette', () => {
      const step = 30;
      const convertedLabels = ['9:00', '9:30', '', '10:00', '', '10:30', '', '', '11:59'];
      const result = generateBackgroundColorBoxes(convertedLabels, step, theme.palette);

      it('returns an object composed of box objects for each odd non-empty label', () => {
        expect(Object.keys(result).length).toBe(2);
      });
    });
  });
});
