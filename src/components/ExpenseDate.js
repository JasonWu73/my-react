import './ExpenseDate.css';

/**
 * 展示开销日期的组件。
 *
 * @param date
 * @param {Date} date 开销的日期
 * @returns {JSX.Element} 展示开销日期的组件
 */
function ExpenseDate({date}) {
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const month = date.toLocaleString('en-US', {month: 'long'});
  const year = date.toLocaleString('en-US', {year: 'numeric'});

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
