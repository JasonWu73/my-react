import {useState} from 'react';

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
  const [titleState, setTitleState] = useState(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={() => clickHandler(titleState, setTitleState)}>Change Title</button>
      </div>
    </Card>
  );
}

/**
 * 测试点击事件。
 *
 * @param {*} field 原值
 * @param {(any) => void} setter setter
 */
function clickHandler(field, setter) {
  setter('Updated!');
  console.log('old title: ', field);
}

export default ExpenseItem;
