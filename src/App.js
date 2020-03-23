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
  const [todoText, setTodoText] = useState('My new todo text')

  const toggleTodo = (todo) => {
    setTodosArray(todosArray.map(t => {
      return t.id === todo.id ? { ...t, completed: !t.completed } : t
    }))
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>TODO Tracker</h1>
      </header>

      <main className='main'>
        <form
          className='form'
          onSubmit={e => {
            e.preventDefault()
            if (todoText !== '') {
              setTodosArray([{
                id: Date.now(),
                item: todoText,
                completed: false
              }, ...todosArray])   // if ...todosArray is first, it adds new todo to bottom, or here to top
              setTodoText('')
            }

          }}>
          <input
            className='input'
            name='todo'
            value={todoText}
            onChange={e => {
              setTodoText(e.target.value)
              // console.log(todoText)
            }}
          />
          <button className='submitBtn' type='submit'>add</button>
          <TodoList todosArray={todosArray} toggleTodo={toggleTodo} />
        </form>
      </main>
    </div>
  );
}

const TodoList = ({ todosArray, toggleTodo }) => {
  return (
    <div>
      {todosArray.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

const Todo = ({ todo, toggleTodo }) => {
  return (
    <div
      className='todo-badge'
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
      onClick={() => toggleTodo(todo)}
    >
      {todo.item}
    </div>
  )
}

export default App;
