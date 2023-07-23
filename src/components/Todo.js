import React from 'react'

function Todo({task, toogleComplete}) {
  return (
    <div className='Todo'>
      <p onClick={() => toogleComplete(task.id)}
      className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
    </div>

  )
}

export default Todo;