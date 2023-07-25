import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'
import{ v4 as uuidv4} from 'uuid'
import EditTodoForm from './EditTodoForm';
uuidv4();

function Wrapper() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    setTasks([...tasks, {id: uuidv4(), todo: task, 
    completed: false, isEditing: false}])
    console.log(tasks)
  }

  function toogleComplete(id) {
    setTasks(tasks.map( task => task.id === id ? 
      {...task, completed: !task.completed} :task))
  }

  function deleteTodo(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  function editTask(id){
    setTasks(tasks.map(task => task.id ===id ? 
      {...task, isEditing: !task.isEditing} : task))
    
  }
  
  function editTodo (todo, id) {
    setTasks(tasks.map(task => task.id ===id ? 
      {...task, todo, isEditing: !task.isEditing} : task))
  }

  return(
    <div className="Wrapper">
      <h1 className='style'>Get Things Done</h1>
      <Form  addTask = {addTask} />
      {tasks.map((task, index) => (
        task.isEditing ? ( <EditTodoForm  editTask={editTodo}
           todo={task}/> ) : (
          <Todo todo={task} key={index}
        toogleComplete={toogleComplete}
        deleteTodo={deleteTodo}
        editTask={editTask} />

        )
      ))}
        
        
    </div>
  )
}

export default Wrapper;