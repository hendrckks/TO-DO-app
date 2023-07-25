import React, {useState} from 'react'

function EditTodoForm({editTask, task}) {
  const [value, setValue] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    editTask(value, task.id);
    setValue("");
  }

    return (
      <form className='TodForm' onSubmit={handleSubmit}>
        <input className='todo-input' value={value} type='text' placeholder= 'update task' onChange=
        {(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>update Task</button>
      </form>
    );
}

export default EditTodoForm;
  