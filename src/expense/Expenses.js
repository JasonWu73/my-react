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
  const [year, setYear] = useState(2020);

  const filterChangeHandler = (year) => {
    setYear(year);
    console.log('year: ', year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilterChange={filterChangeHandler}/>
      {props.items.map(item =>
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      )}
    </Card>
  );
};

export default Expenses;
