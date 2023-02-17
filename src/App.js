import Expenses from './expense';
import NewExpense from './new-expense';

const generateExpenseItems = () => {
  return [
    {
      id: 100,
      date: new Date(2023, 2, 13),
      title: 'Hair Clay',
      amount: 20
    },
    {
      id: 101,
      date: new Date(2023, 2, 12),
      title: 'Jeans',
      amount: 30
    },
    {
      id: 102,
      date: new Date(2023, 2, 11),
      title: 'Adidas Stan Smith',
      amount: 70
    }
  ];
};

const App = () => {
  const expenseItems = generateExpenseItems();

  const addExpenseHandler = (newExpenseData) => {
    console.log('addExpenseHandler: ', newExpenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenseItems}/>
    </div>
  );
};

export default App;
