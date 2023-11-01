import TaskItem from "./taskItem";
import { UseTasks } from "../context/useTasks";
function TaskListLaunched() {
    const {tasks} = UseTasks()
    
    return (
        <div>
            {
               tasks.map(task=>(
                <div>
                {task.launched === true && <TaskItem task={task} key={task._id}/>}
                </div>
               ))
            }
        </div>
    );
}

export default TaskListLaunched;