import { G2Spec, ELEMENT_CLASS_NAME } from '../../../src';
import { step } from './utils';

export function alphabetIntervalActiveMarkerType(): G2Spec {
  return {
    type: 'line',
    clip: true,
    data: {
      type: 'fetch',
      value: 'data/aapl.csv',
    },
    scale: {
      // Specify scale domain to simulate zoom.
      x: { domain: [new Date('2009'), new Date('2011')] },
      y: { domain: [100, 350] },
    },
    encode: {
      x: 'date',
      y: 'close',
    },
    interaction: {
      tooltip: {
        markerType: 'hollow',
      },
    },
  };
}

alphabetIntervalActiveMarkerType.steps = ({ canvas }) => {
  const { document } = canvas;
  const elements = document.getElementsByClassName(ELEMENT_CLASS_NAME);
  const [e] = elements;
  return [step(e, 'pointerover')];
};
