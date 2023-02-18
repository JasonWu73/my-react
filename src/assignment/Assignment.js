import React from 'react';

import './Assignment.css';

export default function App() {
  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}
