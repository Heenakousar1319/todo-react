import React, { useState } from 'react';
import Todo from './Todo';
//import Completed from './Completed';

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  function handleOnChange(e) {
    setTask(e.target.value);
  }

  function handleOnClick() {
    if (task.trim()) {
      setTodoList([...todoList, { text: task.trim(), completed: false }]);
      setTask('');
    }
  }

  function handleMarkCompleted(index) {
    const newTodoList = [...todoList];
    newTodoList[index].completed = true;
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>My To-do List</h1>
      <input 
        type='text' 
        value={task} 
        onChange={handleOnChange} 
      />
      <button onClick={handleOnClick}>Add Task</button>

      <Todo todoList={todoList} markCompleted={handleMarkCompleted} />
      {/* <Completed /> */}
    </>
  );
}
