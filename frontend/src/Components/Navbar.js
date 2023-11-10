import React, { useState } from 'react';

function Navbar( { onDeleteAllTasks }) {
    const [task, setTask] = useState('');

    const handleDeleteAllTasks = () => {
        onDeleteAllTasks();
        setTask('');
    }
    return (
        <nav class='navbar navbar-expand-lg navbar-light d-flex justify-content-between'>
            <a class='navbar-brand font-weight-bold' href='/'>Marvelous v2.0</a>
            <button 
                className='btn btn-outline-danger btn-outline-danger-hover font-weight-bold'
                type='button'
                onClick={handleDeleteAllTasks}
            >
                Delete All Tasks
            </button>
        </nav>
    )
}

export default Navbar;

// <a class='nav-link active' href='/todos/'>Delete All Tasks</a>