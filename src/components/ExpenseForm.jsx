import {useState} from 'react';

const defaultState = {
    id: -1,
    title: '',
    amount: '',
    date: new Date()
}

const ExpenseForm = (props) => {

    const {onSaveExpenseData} = props;

    const [formData, setFormData] = useState(defaultState)
    const [showForm, setShowForm] = useState(false);


    const handleChangeTitle = (e) => {
        setFormData((prevState) => {
            return {...prevState, title: e.target.value}
            }
        );
    }

    const handleChangeAmount = (e) => {
        setFormData((prevState) => {
                return {...prevState, amount: e.target.value}
            }
        );
    }

    const handleChangeDate = (e) => {
        setFormData((prevState) => {
                return {...prevState, date: e.target.value}
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(() => {return defaultState})
       onSaveExpenseData(formData);
    }

    const handleCancelClick = () => {
        setShowForm(false);
    }

    const handelAddExpense = () => {
        setShowForm(true);
    }

    if(showForm) {
        return (
            <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={formData.title} onChange={handleChangeTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={formData.amount} min="0.01" step="0.01" id="amount" onChange={handleChangeAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="Date">Date</label>
                    <input type="date" value={formData.date} min="2019-01-01" max="2022-12-31" id="date" onChange={handleChangeDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button id="btnCancel" onClick={handleCancelClick}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>    
        );
    } else {
        return(
        <div>
            <button onClick={handelAddExpense}>Add Expense</button>
        </div>);
    }


}

export default ExpenseForm;