export interface Task{
    _id:string;
    name:string;
    lastname:string;
    gmail:string;
    password:string;
    createdAt?:Date;
    updatedAt?:Date;
}

export type CreateUser = Omit<Task,'_id'| 'createdAt'|'updatedAt'>
export type LoginUser = Omit<Task,'name'|'lastname'|'createdAt'|'updatedAt'>