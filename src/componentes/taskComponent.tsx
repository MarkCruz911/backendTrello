import React from "react";
import TaskList from "./taskList";
import TaskForm from "./taskForm";
import { TaskProvider } from "../context/taskContext";
import { Task } from '../interfaces/task.interface';
import TaskListToDo from "./tasklistToDo";


function TaskComponent(){
  return(
    <>
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">To Do</h1>
        <TaskProvider>  
          <TaskListToDo/>
        </TaskProvider>
      </div>
    </div>
    </>
    
  )
};

export default TaskComponent;