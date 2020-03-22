import React, { useState } from 'react';

import './App.css';

const initialTodos = [
  {
    id: 1,
    item: 'make breakfast',
    completed: false
  },
  {
    id: 2,
    item: 'make lunch',
    completed: false
  },
  {
    id: 3,
    item: 'make dinner',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos)
  return (
    <div className="App">
      <header className='header'>
        <h1>TODO Tracker</h1>
      </header>
      <main className='main'>
        TODO: TODO's
      </main>
    </div>
  );
}

export default App;
