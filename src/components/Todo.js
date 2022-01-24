import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {  BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FormCheck } from 'react-bootstrap'
// import { VscSaveAll } from 'react-icons/vsc'



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

  
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  }); 

   const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return <div>
  {todos.map(todo => (
    <div
    className={todo.finished ? "list-group-item  complete" : "list-group-item " }
    key={todo.id}
    >
      <FormCheck         
      checked={todo.finished}
      onClick={() => completeTodo(todo.id)}
       />
       <div className='text-item'
       key={todo.id} onClick={() => completeTodo(todo.id)}>
         {todo.title}
       </div>
      <div className='icons'>        
        <RiDeleteBin6Line
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />        
        <BiEdit 
          onClick={() => setEdit({ id: todo.id, value: todo.title })}
          className={todo.finished ? "edit-icon" : "edit-icon active"}
        />
      </div>

    </div>
    ))
  }
 
  </div>

};

export default Todo;