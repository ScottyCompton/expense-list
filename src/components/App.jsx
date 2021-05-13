import {useState} from 'react';
import Expenses from './Expenses';
import NewExpense from '../components/NewExpense';
import {mockData} from '../fixtures/mockdata';
//import {useState} from 'react';

// const defaultState = {
//   id: -1,
//   title: '',
//   amount: '',
//   date: new Date()
// }

function App() {
  const [expenses, setExpenses] = useState(mockData.expenses)

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
    return [expense,
    ...prevExpenses]
    })

  }



  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
