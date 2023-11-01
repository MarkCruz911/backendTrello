import TaskItem from "./taskItem";
import { UseTasks } from "../context/useTasks";
function TaskListInProgress() {
    const {tasks} = UseTasks()
    
    return (
        <div>
            {
               tasks.map(task=>(
                <div>
                {task.inprogress === true && <TaskItem task={task} key={task._id}/>}
                </div>
               ))
            }
        </div>
    );
}

export default TaskListInProgress;