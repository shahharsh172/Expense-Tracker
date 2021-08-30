import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((t) => (
        <ChartBar
          key={t.label}
          value={t.value}
          maxValue={totalMaximum}
          label={t.label}
        />
      ))}
    </div>
  );
};

export default Chart;
