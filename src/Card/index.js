import React from 'react';
import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { useLocalStorage } from '../App/useLocalStorage';
import './Card.css';

function Card({ initialTodos }) {
  //states
  const [searchText, setSearchText] = React.useState('');
  const {item: todos, updateItem: setTodos, error, loading} = useLocalStorage('todos', initialTodos); //custom hook [item, setItem]

  //derived states
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => {
    const todoLowerCase = todo.text.toLowerCase();
    const searchTextLowerCase = searchText.toLowerCase();
    return todoLowerCase.includes(searchTextLowerCase)
  });

  const markTodo = (todoText) => {
    const updatedTodos = [...todos]; //copy of todos state
    const index = updatedTodos.findIndex(todo => todo.text === todoText);
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoText) => {
    const updatedTodos = todos.filter(todo => todo.text !== todoText);
    setTodos(updatedTodos);
  };

  return (
    <div className="card">
      <TodoTitle completed={completedTodos} total={totalTodos} />
      <TodoSearch searchText={searchText} setSearchText={setSearchText} />

      <TodoList>
        {loading && <p>Almost done :) ...</p>}
        {(!loading && filteredTodos.Length === 0) && <p>Add your first ToDo :D</p>}
        {filteredTodos.map(todo =>
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => markTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />)}
      </TodoList>
    </div>
  );
}

export { Card };