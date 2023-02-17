import {useState} from 'react';

import './NewExpense.css';
import Card from '../shared/card/Card';
import ExpenseForm from './ExpenseForm';
import NewExpenseButton from './NewExpenseButton';

export  default  function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <Card className="new-expense">
      {componentContent(showForm, setShowForm, props.onAddExpense)}
    </Card>
  );
};

function componentContent(showForm, setShowForm, onAddExpense) {
  if (!showForm) {
    return <NewExpenseButton onShowForm={() => toggleFormShowHandler(setShowForm)}/>;
  }

  return (
    <ExpenseForm
      onCancelForm={() => toggleFormShowHandler(setShowForm)}
      onSaveExpenseData={(newExpenseData) =>
        saveExpenseDataHandler(newExpenseData, onAddExpense)}
    />
  );
}

function toggleFormShowHandler(setShowForm) {
  setShowForm(previousShowForm => !previousShowForm);
}

function saveExpenseDataHandler(newExpenseData, onAddExpense) {
  const expenseData = {
    ...newExpenseData,
    id: Math.random().toString()
  };

  onAddExpense(expenseData);
}
