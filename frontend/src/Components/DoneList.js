import React, { useState, useEffect } from 'react';

function DoneList({ tasks, onToggleTask }) {
    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() => {
        const filteredTasks = tasks.filter(task => task.status === true)
                                    .sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                                    .slice(0, 10)
                                    .sort((a,b) => a.title.localeCompare(b.title))
                                    
        setDoneTasks(filteredTasks)
    }, [tasks])

    return (
        <div className='container'>
            <h2 className='mt-3 border-bottom pb-2'>Done</h2>
            <ul className='list-group'>
                {doneTasks.map((task) => 
                    <li className='list-group-item d-flex border-0' key={task._id}>
                        <div className='form-check'>
                            <input 
                                type='checkbox'
                                className='form-check-input'
                                checked={true}
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

export default DoneList;