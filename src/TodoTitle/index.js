import './TodoTitle.css';

function TodoTitle({ completed, total }) {
    return (
      <div className='todoTitle'>
        <h1>Todo App</h1>
        <p>You have completed: <span>{completed}</span> out of <span>{total}</span> TODOs</p>
      </div>
    );
  }

export { TodoTitle };