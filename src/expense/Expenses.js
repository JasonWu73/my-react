import {useState} from 'react';
import './Expenses.css';
import Card from '../shared/card/Card';
import Chart from '../shared/chart';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';

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

  const filterChangeHandler = (year) => {
    setYear(year);

    setFilteredExpenses(() => props.items.filter(
      expense => equalsYear(expense.date, year)
    ));
  };

  return (
    <Card className="expenses">
      <Chart points={getMonthlyQuantity(props.items)}/>
      <ExpensesFilter
        years={uniqueYearOptions}
        selectedYear={year}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseList expenseList={filteredExpenses}/>
    </Card>
  );
};

function getMonthlyQuantity(expenses) {
  const monthQuantities = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ];

  for (let expense of expenses) {
    const index = expense.date.getMonth();
    monthQuantities[index].value += 1;
  }

  return monthQuantities;
}

export default Expenses;
