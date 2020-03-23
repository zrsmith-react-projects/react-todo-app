import React, { useState } from 'react';

import './App.css';
// multi classNames with filter
const cn = (...classNames) => classNames.filter(x => x).join(' ')

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
        <TodoList todosArray={todosArray} setTodosArray={setTodosArray} />
      </main>
    </div>
  );
}

const TodoList = ({ todosArray, setTodosArray }) => {
  return (
    <div>
      {todosArray.map(todo => (
        <Todo key={todo.id} todo={todo} todosArray={todosArray} setTodosArray={setTodosArray} />
      ))}
    </div>
  )
}

const Todo = ({ todo, setTodosArray, todosArray }) => {
  return (
    <div
      className='todo-badge'
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
      onClick={() => {
        setTodosArray(todosArray.map(t => {
          return t.id === todo.id ? { ...t, completed: !t.completed } : t
        }))
      }}
    >
      {todo.item}
    </div>
  )
}

export default App;
