import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewTaskForm from './Components/NewTaskForm';
import { addTask, deleteAllTasks, getTasks, updateTask } from './api';
import TodoList from './Components/TodoList';
import DoneList from './Components/DoneList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks([...tasksData.undoneTasks, ...tasksData.doneTasks]);
    };

    console.log('tasks State', tasks)
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(
    (task) => task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = async (task) => {
    console.log('handleAddTask', tasks);
    const newTask = await addTask(task);
    console.log('handleAddTask', newTask);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = async (taskId) => {
    const updatedTask = await updateTask(taskId);
    console.log('handleToggleTask', updatedTask);
    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId) {
        return updatedTask
      } else {
        return task
      }
    })
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = async () => {
    const deletedResult = await deleteAllTasks();
    setTasks([]);
  }

  return (
    <div className="App">
      <Navbar onDeleteAllTasks={handleDeleteAllTasks}/>
      <NewTaskForm onAddTask={handleAddTask} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='row'>
        <div className='col-md-6'>
          <div className='todo'>
            <TodoList tasks={filteredTasks} onToggleTask={handleToggleTask} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='done'>
            <DoneList tasks={filteredTasks} onToggleTask={handleToggleTask} />
          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;
