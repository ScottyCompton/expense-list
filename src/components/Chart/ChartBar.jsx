
const ChartBar = (props) => {
    const {value, maxValue, label} = props;

    const chartbarStyle = {
        height: ((value/maxValue) * 100).toString() + '%'
    }

    return (
        <div className="chart-bar">
            <label className="chart-bar__label">{label}</label>
            <div className="chart-bar__inner" title={ '$' + value.toFixed(2) }>
                <div className="chart-bar__fill" style={chartbarStyle}></div>
            </div>
        </div>
    )
}

export default ChartBar;