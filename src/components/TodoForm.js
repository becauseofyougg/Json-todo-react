import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap'
import { VscSaveAll } from 'react-icons/vsc'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({      
      id: new Date(),
      title: input,
      finished: false
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-group'>
      {props.edit ? (
        <>          
            <input
            placeholder='Save'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='form-control edit'
          />
          <Button onClick={handleSubmit} className='edit'><VscSaveAll /></Button>
        </>
      ) : (
        <>
          <input
            placeholder='Add'
            value={input}
            onChange={handleChange}
            name='text'
            className='form-control'
            ref={inputRef}
          />
          <Button as="input" type="submit" value="Add" />
        </>
      )}
    </form>
  );
}

export default TodoForm;