import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const changeHandler = event => {
    const year = event.target.value;
    props.onFilterChange(year);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeHandler}>
          {props.years.map(
            year => <option key={year} value={year + ''}>{year}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
