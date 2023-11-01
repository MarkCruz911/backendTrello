import { useContext } from "react";
import { TaskContext } from "./taskContext";

export const UseTasks=()=>{
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTasks must be used within a TaskProvider');
    return context;
}










