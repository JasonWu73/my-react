import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [inputValue, setInputValue] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChangeHandler = event => {
    // setTitle(event.target.value);
    // setInputValue({
    //   ...inputValue,
    //   title: event.target.value
    // });
    setInputValue(previousState => {
      return {...previousState, title: event.target.value};
    });
  };

  const amountChangeHandler = event => {
    // setAmount(event.target.value);
    // setInputValue({
    //   ...inputValue,
    //   amount: event.target.value
    // });
    setInputValue(previousState => {
      return {...previousState, amount: event.target.value};
    });
  };

  const dateChangeHandler = event => {
    // setDate(event.target.value);
    // setInputValue({
    //   ...inputValue,
    //   date: event.target.value
    // });
    setInputValue(previousState => {
      return {...previousState, date: event.target.value};
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    // console.log(title);
    // console.log(amount);
    // console.log(date);
    console.log(inputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
