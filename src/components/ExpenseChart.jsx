import Chart from '../components/Chart/Chart';


const ExpenseChart = (props) => {
    let dataPoints = [];
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    props.items.forEach(item => {
        const monthIdx = new Date(item.date).getMonth(); // 0, 1, 2...
        const monthLabel = monthNames[monthIdx];
        const dpIdx = dataPoints.findIndex((dpItem) => dpItem.label === monthLabel);

        if(dpIdx === -1) {  // must not exitst, add to array
            dataPoints.push({
                'label': monthLabel,
                'value': item.amount
            })
        } else {
            dataPoints[dpIdx].value += item.amount;
        }
        
    });

    return <Chart dataPoints={dataPoints} />
}

export default ExpenseChart;