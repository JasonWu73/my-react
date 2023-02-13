import Expenses from './components/expense/Expenses';

const App = () => {
  const expenseItems = generateExpenseItems();

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenseItems}/>
    </div>
  );
};

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
