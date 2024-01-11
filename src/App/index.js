import React from 'react';
import { Card } from '../Card';
import { TodoCreate } from '../TodoCreate';
import './App.css';

const initialTodos = [
  { text: 'Make the bed', completed: true },
  { text: 'Wash my hands', completed: false },
  { text: 'Walk the dog', completed: false },
  { text: 'Make breakfast', completed: true }
];

function App() {
  return (
    <div className='App'>
      <Card initialTodos={initialTodos} />
      <TodoCreate />
    </div>
  );
}

export default App;
