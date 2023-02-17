import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {
  if (props.expenseList.length === 0) {
    return <p className="expenses__list">Found no expense.</p>;
  }

  return (
    <ul className="expenses__list">
      {props.expenseList.map(expense =>
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />)}
    </ul>
  );
}
