import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Ui/Card';

/**
 * 显示开销的组件。
 *
 * @param {Object} props 组件属性
 * @param {{id: number, date: Date, title: string, amount: number}[]} props.items 开销数据列表
 * @returns {JSX.Element} 显示开销的组件
 */
const Expenses = props => {
  return (
    <Card className="expenses">
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
