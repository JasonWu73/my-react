import './Chart.css';

import ChartBar from './ChartBar';

export default function Chart(props) {
  return (
    <div className="chart">
      {barContent(props.points)}
    </div>
  );
}

function barContent(points) {
  const maxValue = Math.max(...points.map(point => point.value));

  return points.map(point => (
    <ChartBar
      key={point.label}
      value={point.value}
      maxValue={maxValue}
      label={point.label}
    />
  ));
}
