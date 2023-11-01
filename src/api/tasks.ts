import { CreateTask, updateTask } from "../interfaces/task.interface";
const API="http://localhost:4000/api"

export const createTaskRequest = (task:CreateTask)=>
    fetch(`${API}/tasks`,{
        method:'POST',
        body:JSON.stringify(task),
        headers:{
            'Content-Type':'application/json'
        }
    });

export const getTaskRequest = ()=>fetch(`${API}/tasks`);

export const deleteTaskRequest=(id:string)=>fetch(`${API}/tasks/${id}`,{
    method:"DELETE",
});

export const updateTaskRequest=(id:string,task:updateTask)=>    
fetch(`${API}/tasks/${id}`,{
        method:"PUT",
        body:JSON.stringify(task),
        headers:{
            "Content-Type":"application/json",
        },
});





