import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../shared/Card';

const NewExpense = props => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
  );
};

export default NewExpense;
