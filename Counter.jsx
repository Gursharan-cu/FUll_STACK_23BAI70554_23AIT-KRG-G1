import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage('');
    } else {
      setMessage('Maximum limit reached');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    } else {
      setMessage('Limit Reached');
    }
  };

  return (
    <div>
      <h1>LAB MST</h1>
      <div> Value : {count}</div>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={increment}>Increment</button>
      <div>{message}</div>
    </div>
  );
}

export default Counter;