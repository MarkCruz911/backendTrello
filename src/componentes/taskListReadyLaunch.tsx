import TaskItem from "./taskItem";
import { UseTasks } from "../context/useTasks";
function TaskListReadyLaunch() {
    const {tasks} = UseTasks()
    
    return (
        <div>
            {
               tasks.map(task=>(
                <div>
                {task.readylaunch === true && <TaskItem task={task} key={task._id}/>}
                </div>
               ))
            }
        </div>
    );
}

export default TaskListReadyLaunch;