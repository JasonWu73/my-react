import './ExpenseDate.css';

/**
 * 开销日期组件。
 *
 * @param {Object} props 组件属性
 * @param {Date} props.date 开销日期
 * @returns {JSX.Element} 开销日期组件
 */
const ExpenseDate = props => {
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.toLocaleString('en-US', {year: 'numeric'});

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
