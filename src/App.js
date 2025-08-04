import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sample React Web App</h1>
      <p>Welcome to your React sample application!</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
