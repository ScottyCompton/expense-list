import ExpenseItem from './ExpenseItem';
import ExpenseChart from './ExpenseChart';


const ExpensesList = props => {

    if(props.items.length > 0) {
        return (
            <div>
                <ExpenseChart items={props.items} />
                <ul className="expenses-list">
                    {props.items.map((item) => <ExpenseItem key={Math.random().toString()} item={item} />)}
                </ul>
            </div>
        )
    } else {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

}

export default ExpensesList;