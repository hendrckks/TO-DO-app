import React, {useState} from 'react'

function Form({addTask}) {
  const [value, setValue] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    addTask(value);
    setValue("");
  }

    return (
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' value={value} type='text' placeholder='Add a new task' onChange=
        {(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add New Task</button>
      </form>
    );
}

export default Form;
  
