import ChartBar from './ChartBar';


const Chart = (props) => {
    const maxValue = Math.max.apply(Math, props.dataPoints.map((item) => item.value));

    return (
        props.dataPoints && 
        <div className="chart">
            {props.dataPoints.map((dataPoint) => <ChartBar key={Math.random().toString()} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} />)}
        </div>        
    )
}

export default Chart;