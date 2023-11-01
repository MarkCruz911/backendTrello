import { ChangeEvent,FormEvent,useState } from "react";
import {UseTasks} from "../context/useTasks";

interface ChildProps{
    id:string ;
    title:string;
    description:string | undefined;
    reddd:boolean;
    setReddd:React.Dispatch<React.SetStateAction<boolean>>;
};

function TaskForm(props: ChildProps) {
    const setReddd = props.setReddd;
    const reddd = props.reddd;
    const id=props.id;
    const description=props.description;

    const [task,setTask]=useState({
        title:props.title,
        description:"",
        instandby:false,
    });

    const [taskk,setTaskk]=useState({
        title:props.title,
        description:"",
        instandby:true,
    });

    const {createTask}=UseTasks()
    const {updateTask}=UseTasks()

    const handlerChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        if(reddd){
            setTask({... task,[e.target.name]: e.target.value});
        }else{
            setTaskk({... taskk,[e.target.name]: e.target.value});
        }
    }

    const handlerSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(reddd){
            updateTask(id,task);
        }else{
            createTask(taskk)
        }
    }
    
    return (
        <div>
            <form action="" onSubmit={handlerSubmit}>
                <input type="text" 
                name="title" 
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Escribe el titulo"
                value={reddd?task.title:taskk.title}
                onChange={handlerChange}
                />

                <textarea name="description" 
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Escribe la Descripcion" 
                onChange={handlerChange}
                rows={3}>
                    {description}
                </textarea>
                <button className="bg-indigo-500 px-3 block py-2 w-full">save</button>
            </form>
            <button className="bg-red-500 px-3 block py-2 w-full" onClick={()=>setReddd(false)}>
                Close
            </button>
        </div>
    );
}

export default TaskForm;