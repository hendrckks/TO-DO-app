import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'
import{ v4 as uuidv4} from 'uuid'
uuidv4();

function Wrapper() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    setTasks([...tasks, {id: uuidv4(), task: task, 
    completed: false, isEditing: false}])
    console.log(tasks)
  }

  function tooglecomplete() {
    
  }
  return(
    <div className="Wrapper">
      <h1>Get Things Done</h1>
      <Form  addTask = {addTask} />
      {tasks.map((task, index) => (
        <Todo task={task} key={index}
        tooglecomplete={tooglecomplete} />))}
    </div>
  )
}

export default Wrapper;