import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/todos/';

export const getTasks = async () => {
    const { data } = await axios.get(`${BASE_URL}get-tasks`)
    // setTasks(response.data);
    console.log('getTasks', data);
    return data;
}

export const addTask = async (task) => {
    const response = await axios.post(`${BASE_URL}add-task`, {title: task})
        .catch((err) => {
            console.log(err)
        })
    await getTasks();
    return response.data.task;
}

export const updateTask = async (id) => {
    const response = await axios.put(`${BASE_URL}${id}`)
        .catch((err) => {
            console.log(err)
        })
    console.log('response', response.data);
    return response.data.task;
  };

export const deleteTask = async (id) => {
    const response = await axios.delete(`${BASE_URL}${id}`)
    await getTasks();
}

export const deleteAllTasks = async () => {
    const response = await axios.delete(`${BASE_URL}delete-tasks`)
    console.log('response', response)
    return response.data;
}

