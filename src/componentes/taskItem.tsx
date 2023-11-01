import React, { useState } from 'react';
import { Task } from '../interfaces/task.interface';
import { UseTasks } from '../context/useTasks';
import { IoCheckmarkDoneSharp,IoCloseOutline,IoTrash,IoGitCompareOutline } from "react-icons/io5"; 
import TaskForm from './taskForm';
interface Props{
    task:Task
}

function TaskItem({task}:Props) {
    const  {deleteTask,updateTask}=UseTasks();
    const [red,setRed]=useState<boolean>(false);
    
    return (
        <>
        <div key={task._id} className='bg-gray-900 p-2 my-2 grid grid-rows-2 flex justify-stretch hover:bg-gray-800 hover:cursor-pointer'>
            <div>
            <h1 className='font-bold'>
                {task.title}
            </h1>
            <p>
                {task.description}
            </p>
            </div>
            <div className='flex gap-x-2'>
                <button  
                onClick={()=>{
                    updateTask(task._id,{
                        instandby:true,
                        todo:false,
                        inprogress:false,
                        readylaunch:false,
                        launched:false,
                    })
                }}
                >
                {task.instandby ? <IoCheckmarkDoneSharp/>:<IoCloseOutline/>}

                </button>
                <button  
                onClick={()=>{
                    updateTask(task._id,{
                        instandby:false,
                        todo:true,
                        inprogress:false,
                        readylaunch:false,
                        launched:false,
                    })
                }}
                >
                {task.todo ? <IoCheckmarkDoneSharp/>:<IoCloseOutline/>}

                </button>
                <button  
                onClick={()=>{
                    updateTask(task._id,{
                        instandby:false,
                        todo:false,
                        inprogress:true,
                        readylaunch:false,
                        launched:false,
                    })
                }}
                >
                {task.inprogress ? <IoCheckmarkDoneSharp/>:<IoCloseOutline/>}
                </button>
                <button  
                onClick={()=>{
                    updateTask(task._id,{
                        instandby:false,
                        todo:false,
                        inprogress:false,
                        readylaunch:true,
                        launched:false,
                    })
                }}
                >
                {task.readylaunch ? <IoCheckmarkDoneSharp/>:<IoCloseOutline/>}

                </button><button  
                onClick={()=>{
                    updateTask(task._id,{
                        instandby:false,
                        todo:false,
                        inprogress:false,
                        readylaunch:false,
                        launched:true,
                    });

                }}
                >
                {task.launched ? <IoCheckmarkDoneSharp/>:<IoCloseOutline/>}

                </button>

                <button onClick={async ()=>{
                    await updateTask(task._id,{
                        title:task.title,
                        description:task.description,
                    });
                    await setRed(true);
                }}><IoGitCompareOutline/> </button>

                <button onClick={async ()=>{
                    if(!window.confirm("Are you sure you want to delete this task")){
                        return;
                    }
                    await deleteTask(task._id)
                }}><IoTrash/> </button>
                
            </div>
            <div>
                {red===true && <TaskForm title={task.title} description={task.description} id={task._id} setReddd={setRed} reddd={red}  />}
                    
            </div>
        </div>
        
        </>
    );
}
export default TaskItem;