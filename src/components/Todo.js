import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function Todo({task, toogleComplete, deleteTodo, editTask}) {
  return (
    <div className='Todo'>
        <p onClick={() => toogleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTodo(task.id)} />
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)} />
        </div>
     </div>
    
  )
}

export default Todo;