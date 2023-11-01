import TaskItem from "./taskItem";
import { UseTasks } from "../context/useTasks";
function TaskListToDo() {
    const {tasks} = UseTasks()
    
    return (
        <div>
            {
               tasks.map(task=>(
                <div>
                {task.todo === true && <TaskItem task={task} key={task._id}/>}
                </div>
               ))
            }
        </div>
    );
}

export default TaskListToDo;