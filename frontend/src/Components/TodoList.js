import React, { useState, useEffect } from 'react';

function TodoList({ tasks, onToggleTask }) {
    const [undoneTasks, setUndoneTasks] = useState([]);

    useEffect(() => {
        setUndoneTasks(tasks.filter(task => task.status === false)
                            .sort((a,b) => a.title.localeCompare(b.title)))
    }, [tasks])

    return (
        <div className='container'>
            <h2 className='mt-3 border-bottom pb-2'>To Do</h2>
            <ul className='list-group'>
                {undoneTasks.map((task) => 
                    <li className='list-group-item d-flex border-0' key={task._id}>
                        <div className='form-check'>
                            <input 
                                type='checkbox'
                                className='form-check-input'
                                id={task._id}
                                onChange={() => onToggleTask(task._id)}

                            />
                        </div>
                        <span className='ml-3'>{task.title}</span>
                    </li>)}

            </ul>
            
        </div>
    )
}

export default TodoList;