import {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../shared/Card';
import ExpensesFilter from './ExpensesFilter';

/**
 * 显示开销的组件。
 *
 * @param {Object} props 组件属性
 * @param {{id: number, date: Date, title: string, amount: number}[]} props.items 开销数据列表
 * @returns {JSX.Element} 显示开销的组件
 */
const Expenses = props => {
  const [year, setYear] = useState(2020);

  const filterChangeHandler = (year) => {
    setYear(year);
    console.log('year: ', year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilterChange={filterChangeHandler}/>
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
    </Card>
  );
};

export default Expenses;
