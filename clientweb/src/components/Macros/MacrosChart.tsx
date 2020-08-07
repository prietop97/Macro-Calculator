import React, { ReactElement } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js';

/// ADD ABILITY TO PUT TEXT INSIDE THE CHART
let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);

    let chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 100).toFixed(2);
    ctx.font = fontSize + 'em Verdana';
    ctx.textBaseline = 'middle';

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2 + 6;

    ctx.fillText(text, textX, textY);
  }
});
Chart.defaults.doughnut.animation.animateRotate = false;
interface Props {
  color: string;
  total: number | undefined;
  consumed: number | null;
}
export default function MacrosChart({
  color,
  total,
  consumed
}: Props): ReactElement {
  const data = {
    datasets: [
      {
        data: [consumed, total],
        backgroundColor: ['lightgray', color]
        // hoverBackgroundColor: ['lightgray', color],
        // hoverBorderWidth: [0, 0]
      }
    ],
    text: color === '#4caf50' ? `${total!}` : `${total!}g`
  };
  return (
    <Doughnut
      data={data}
      options={{ cutoutPercentage: 85, events: [], responsive: true }}
      height={250}
    />
  );
}
