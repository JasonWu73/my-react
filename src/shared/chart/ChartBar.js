import './ChartBar.css';

export default function ChartBar(props) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__inner__fill"
          style={
            {
              height: calculateHeightPercent(props.value, props.maxValue)
            }
          }
        >{props.value}
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

function calculateHeightPercent(value, maxValue) {
  return Math.round(value / maxValue * 100) + '%';
}
