import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';

/**
 * 显示开销的组件。
 *
 * @param {Array} items 开销数据列表
 * @param {number} items.id 开销数据 id
 * @param {Date} items.date 开销时间
 * @param {string} items.title 开销说明
 * @param {number} items.amount 开销金额，单位：美元
 * @returns {JSX.Element} 显示开销的组件
 */
const Expenses = ({items}) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        amount={items[0].amount}
      />
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        amount={items[1].amount}
      />
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        amount={items[2].amount}
      />
    </Card>
  );
};

export default Expenses;
