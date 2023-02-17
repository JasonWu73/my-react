import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../shared/card/Card';

/**
 * 开销组件。
 *
 * @param {Object} props 组件属性
 * @param {Date} props.date 开销日期
 * @param {string} props.title 开销名称
 * @param {number} props.amount 开销金额，单位：美元
 * @returns {JSX.Element} 开销组件
 */
const ExpenseItem = props => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
