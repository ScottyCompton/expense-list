import React, {useState} from 'react';


const ExpensesFilter = (props) => {

    const [filterYear, setFilterYear] = useState(new Date().getFullYear());

    const onSelectChange = (e) => {
        const newFilterYear = e.target.options[e.target.selectedIndex].value;
        setFilterYear(newFilterYear);
        props.onChangeFilter(newFilterYear);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filterYear} onChange={onSelectChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;