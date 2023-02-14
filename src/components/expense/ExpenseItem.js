import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

/**
 * 展示开销的组件。
 *
 * @param {Date} date 开销日期
 * @param {string} title 开销名称
 * @param {number} amount 开销金额，单位：美元
 * @returns {JSX.Element} 展示开销数据的组件
 */
function ExpenseItem({date, title, amount}) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

/**
 * 测试点击事件。
 *
 * @param {Event} event
 */
function clickHandler(event) {
  console.log(event.target);
}

export default ExpenseItem;
