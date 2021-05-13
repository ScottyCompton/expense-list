import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            amount: +enteredExpenseData.amount,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>)
}

export default NewExpense;