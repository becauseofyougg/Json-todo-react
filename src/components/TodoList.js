import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



function TodoList() {
  const [todos, setTodos] = useState([]); 

  const url = 'http://localhost:8000/hashtags';

  useEffect(()=>{
    fetch(url)    
    .then(response => {
      if (response.ok) {
        return response.json()
      } throw response
    }).then(data => {
      console.log(data)
      setTodos(data)
    }).catch(e => console.error(e))    
  },[])

const addTodo = todo => {
  if (!todo.title || /^\s*$/.test(todo.title)) {
    return;
  }
  const newTodos = [todo, ...todos];
  setTodos(newTodos);
  
  fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(todos)
  }).catch(e => console.error(e.message))
};

  const updateTodo = (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    fetch(url + todos.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todos)
    })
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);

    fetch(url + todos.id, {
      method: 'DELETE'
    }).catch(e => console.error(e.message))
  };


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
     if (todo.id === id) {
      todo.finished = !todo.finished;           
      }      
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completed = todos.filter(e => e.finished === true)
  const uncompleted = todos.filter(e => e.finished === false)

  return (
    <div className='wrapper'>
      <div className='left-side'>
        
      <TodoForm onSubmit={addTodo} />
      <h2>Total: {todos.length}</h2>
      <h3>To do({uncompleted.length})</h3>
      <Todo 
        todos={uncompleted}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} 
        />
      </div>
      
      <div className='right-side'>
        <h3>Completed: {completed.length}</h3>
        <Todo
        todos={completed}        
        removeTodo={removeTodo}               
        />
      </div>
    </div>
  );
}

export default TodoList;