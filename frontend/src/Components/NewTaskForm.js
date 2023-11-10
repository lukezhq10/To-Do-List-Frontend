import React, { useState } from 'react';

function NewTaskForm({ onAddTask, searchQuery, setSearchQuery }) {
    const [task, setTask] = useState('');
    

    const handleAddTask = () => {
        if (task !== '') {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a new task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleAddTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
                <div className='col-md-6 mb-3'>
                    <div className="input-group mb-3">
                        <input 
                            type='text'
                            className='form-control'
                            placeholder='Search'
                            aria-label='Search'
                            aria-describedby='search-button'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTaskForm;

{/* <div className='input-group mb-3'>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Search'
                        aria-label='Search'
                        aria-describedby='search-button'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div> */}