import React from 'react';

export default function Todo({ todoList, markCompleted }) {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => markCompleted(index)}>Mark Completed</button>
          )}
        </li>
      ))}
    </ul>
  );
}
