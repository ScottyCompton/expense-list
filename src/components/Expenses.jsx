import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from './Card';


const Expenses = (props) => {


    const [filterYear, setFilterYear] = useState(new Date().getFullYear());

    const filterChangeHandler = (filterYear) => {
        setFilterYear(filterYear);
    }


    const filteredExpenses = props.items.filter((item) => {
        return new Date(item.date).getFullYear().toString() === filterYear.toString();
    })

        return (
            <div>
                <Card className="expense-filter">
                    <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                </Card>
                <div>
                    <ExpensesList items={filteredExpenses} />
                </div>
            </div>
        )    
}






export default Expenses;