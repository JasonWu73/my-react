import './NewExpenseButton.css';

export  default  function NewExpenseButton(props) {
  return (
    <div className="new-expense--button">
      <button onClick={props.onShowForm}>Add Expense</button>
    </div>
  );
};
