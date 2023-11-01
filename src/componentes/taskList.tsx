import {useEffect,useState} from "react";
import { getTaskRequest } from "../api/tasks";
import { Task } from "../interfaces/task.interface";
import TaskItem from "./taskItem";
import { UseTasks } from "../context/useTasks";
function TaskList() {
    const {tasks} = UseTasks()
    
    return (
        <div>
            {
               tasks.map(task=>(
                task.instandby === true && <TaskItem task={task} key={task._id}/> 
               ))
            }
        </div>
    );
}

export default TaskList