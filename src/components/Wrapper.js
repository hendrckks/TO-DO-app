import React, {useState} from 'react'
import Form from './Form'
import{ v4 as uuidv4} from 'uuid'
uuidv4();

function Wrapper() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    setTasks([...tasks, {id: uuidv4(), todo: task, 
    completed: false, isEditing: false}])
    console.log(tasks)
  }
  return(
    <div className="Wrapper">
      <h1>Get Things Done</h1>
      <Form  addTask = {addTask} />
    </div>
  )
}

export default Wrapper;