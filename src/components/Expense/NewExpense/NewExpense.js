import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../../Ui/Card';

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm/>
    </Card>
  );
};

export default NewExpense;
