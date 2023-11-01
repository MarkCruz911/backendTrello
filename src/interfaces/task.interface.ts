export interface Task{
    _id:string;
    title:string;
    description?:string;
    done?:boolean;
    instandby?:boolean;
    todo?:boolean;
    inprogress?:boolean;
    readylaunch?:boolean;
    launched?:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}

export type CreateTask = Omit<Task,'_id'| 'createdAt'|'updatedAt'>
export type updateTask = Partial<CreateTask>;


