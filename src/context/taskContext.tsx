import { createContext, useState,useEffect } from "react";
import { getTaskRequest,createTaskRequest,deleteTaskRequest, updateTaskRequest} from "../api/tasks";
import { Task,CreateTask, updateTask } from "../interfaces/task.interface";

interface TaskContextValue{
    tasks:Task[];
    createTask:(task:CreateTask)=>Promise<void>;
    deleteTask:(id:string)=>Promise<void>;
    updateTask:(id:string,task:updateTask)=>Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
    tasks:[],
    createTask:async()=>{},
    deleteTask:async()=>{},
    updateTask:async()=>{},
})

interface Props{
    children:React.ReactNode;
}

export const TaskProvider:React.FC<Props> = ({children})=>{
    const [tasks,setTasks]=useState<Task[]>([]);

useEffect(()=>{
    getTaskRequest().then((response)=>response.json()).then((data)=>setTasks(data));
},[]);


const createTask=async (task:CreateTask)=>{
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([... tasks,data]);
    console.log(task);
}

const deleteTask=async (id:string)=>{
    const res=await deleteTaskRequest(id);
    if (res.status===204){
        setTasks(tasks.filter(tasks=>tasks._id != id));
        
    }
    console.log(res)
};
const updateTask=async(id:string,task:updateTask)=>{
    const res =await updateTaskRequest(id,task);
    const data=await res.json();
    setTasks(tasks.map(task=>task._id===id? {...task,...data}:task));
     
    console.log(data);
}

    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    );
};





