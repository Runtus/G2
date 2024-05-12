import { csv } from 'd3-fetch';
import { autoType } from 'd3-dsv';
import { G2Spec, PLOT_CLASS_NAME } from '../../../src';
import { brush } from './penguins-point-brush';

export async function indicesLineCrosshairsXY(): Promise<G2Spec> {
  const data = await csv('data/indices.csv', autoType);
  return {
    type: 'view',
    children: [
      {
        type: 'line',
        data,
        axis: {
          y: { labelAutoRotate: false },
        },
        transform: [{ type: 'normalizeY', basis: 'first', groupBy: 'color' }],
        legend: false,
        encode: {
          x: 'Date',
          y: 'Close',
          color: 'Symbol',
          key: 'Symbol',
        },
        state: {
          active: { stroke: 'red' },
        },
      },
    ],
    interaction: {
      tooltip: {
        crosshairs: {
          type: 'xy',
          stroke: 'green',
        },
        crosshairsX: {
          stroke: 'red',
        },
        crosshairsY: {
          stroke: 'blue',
        },
      },
    },
  };
}
