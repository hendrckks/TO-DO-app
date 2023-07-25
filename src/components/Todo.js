import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function Todo({todo, toogleComplete, deleteTodo, editTask}) {
  return (
    <div className='Todo'>
        <p onClick={() => toogleComplete(todo.id)}
        className={`${todo.completed ? 'completed' : ""}`}>{todo.todo}</p>
        <div>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTodo(todo.id)} />
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(todo.id)} />
        </div>
     </div>
    
  )
}

export default Todo;