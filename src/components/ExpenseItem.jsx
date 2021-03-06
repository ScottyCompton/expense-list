import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
    const {title, date, amount} = props.item;

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>     
        </li>   
    )
}

export default ExpenseItem;