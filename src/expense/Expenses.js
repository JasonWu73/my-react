import {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../shared/Card';
import ExpensesFilter from './ExpensesFilter';

/**
 * 显示开销的组件。
 *
 * @param {Object} props 组件属性
 * @param {{id: string, date: Date, title: string, amount: number}[]} props.items 开销数据列表
 * @returns {JSX.Element} 显示开销的组件
 */
const Expenses = props => {
  const yearOptions = props.items.map(expense => expense.date.getFullYear());
  const uniqueYearOptions = [...new Set(yearOptions)];
  const [year, setYear] = useState(
    props.items.length > 0 ?
      props.items[0].date.getFullYear() :
      ''
  );
  const equalsYear = (date, year) => date.getFullYear() === +year;
  const [filteredExpenses, setFilteredExpenses] = useState(props.items.filter(
    expense => equalsYear(expense.date, year)
  ));
  console.log(filteredExpenses);

  const filterChangeHandler = (year) => {
    setYear(year);

    setFilteredExpenses(() => props.items.filter(
      expense => equalsYear(expense.date, year)
    ));
  };

  let expensesContent = <p>No expenses found.</p>
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(
      item => <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        years={uniqueYearOptions}
        selectedYear={year}
        onFilterChange={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
