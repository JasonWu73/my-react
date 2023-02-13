import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseItems = generateExpenseItems();

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenseItems[0].date}
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
      />
      <ExpenseItem
        date={expenseItems[1].date}
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
      />
      <ExpenseItem
        date={expenseItems[2].date}
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
      />
    </div>
  );
}

function generateExpenseItems() {
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
}

export default App;
