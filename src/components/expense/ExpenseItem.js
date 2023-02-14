import {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

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
  const [title, setTitle] = useState(props.title);
  console.log('render');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('old title:', title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
