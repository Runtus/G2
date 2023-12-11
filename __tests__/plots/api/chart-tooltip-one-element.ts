import { Chart } from '../../../src';

export function chartTooltipOneElement(context) {
  const { container } = context;
  const chart = new Chart({
    container,
    autoFit: true,
  });

  chart
    .line()
    .data({
      value: [
        {
          date: '2007-04-23T00:00:00.000Z',
          close: 93.24,
        },
      ],
    })
    .encode('x', 'date')
    .encode('y', 'close')
    .encode('size', 10)
    .interaction('tooltip', { mount: 'body' })
    .label({
      text: 'close',
    });

  return { finished: chart.render() };
}
