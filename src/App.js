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
    completed: true
  },
  {
    id: 4,
    item: 'make dessert',
    completed: true
  }
]

const App = () => {
  const [todosArray, setTodosArray] = useState(initialTodos)
  return (
    <div className="App">
      <header className='header'>
        <h1>TODO Tracker</h1>
      </header>
      <main className='main'>
        {todosArray.map(todo => (
          <div
            className='todo-badge'
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : undefined }}>{todo.item}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
