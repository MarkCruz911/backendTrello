import React from "react";
import TaskList from "./taskList";
import TaskForm from "./taskForm";
import { TaskProvider } from "../context/taskContext";
import TaskListToDo from "./tasklistToDo";
import TaskListInProgress from "./taskListInProgress";
import TaskListReadyLaunch from "./taskListReadyLaunch";
import TaskListLaunched from "./taskListLaunched";
function FormItem(){

  return(
    <>
    <div className="bg-zinc-900 h-full text-white flex items-start justify-around">
      <div className="bg-gray-950 p-4 mx-1 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Task on Hold</h1>
        <TaskProvider>
          <TaskForm id={""} reddd={false} setReddd={function (value: React.SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
            } } title={""} description={undefined}/>  
          <TaskList/>
        </TaskProvider>
      </div>
      <div className="bg-gray-950 p-4 mx-1 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">To Do</h1>
        <TaskProvider>  
          <TaskListToDo/>
        </TaskProvider>
      </div>
      <div className="bg-gray-950 p-4 mx-1 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">In Progress</h1>
        <TaskProvider>  
          <TaskListInProgress/>
        </TaskProvider>
      </div>
      <div className="bg-gray-950 p-4 mx-1 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Ready For Launch</h1>
        <TaskProvider>  
          <TaskListReadyLaunch/>
        </TaskProvider>
      </div>
      <div className="bg-gray-950 p-4 mx-1 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Task Launched</h1>
        <TaskProvider>  
          <TaskListLaunched/>
        </TaskProvider>
      </div>
    </div>


    </>
    
  )
};

export default FormItem;