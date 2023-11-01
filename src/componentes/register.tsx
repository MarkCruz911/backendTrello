import {useState,ChangeEvent,FormEvent} from 'react'
import { CreateUser } from '../interfaces/user.interface';
const API="http://localhost:4000/api"

function Register() {
    const [user,setUser]=useState({
        name:"",
        lastname:"",
        gmail:"",
        password:"",
    });

    const createUserRequest = (user:CreateUser)=>
    fetch(`${API}/users`,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    });

    const handlerChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setUser({... user,[e.target.name]: e.target.value});
        
    }
    const handlerSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        createUserRequest(user);
        console.log(user);
    }


    return (
    <div className="font-sans  ">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-zinc-900 ">
        <div className="relative sm:max-w-sm w-full">
            <div className="card bg-gray-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-gray-900 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4  bg-gray-950 shadow-md">
                <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Registrate
                </label>
                <form method="" action="" onSubmit={handlerSubmit} className="mt-10">
                                    
                    <div>
                        <input type="text" onChange={handlerChange} name='name' placeholder="Nombres" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                    </div>
                    
                    <div className="mt-7">                
                        <input type="text" onChange={handlerChange} name='lastname' placeholder="Apellidos" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">                
                        <input type="email" onChange={handlerChange} name='gmail' placeholder="Correo electronico" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">                
                        <input type="password" onChange={handlerChange} name='password' placeholder="Contraseña" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">
                        <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Registrar
                        </button>
                    </div>
        
                    <div className="flex mt-7 items-center text-center">
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                        <label className="block font-medium text-sm text-gray-600 w-full">
                            Registrate con
                        </label>
                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                    </div>
                    <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2" >¿Ya tienes una cuenta?</label>
                            <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Iniciar sesion
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    );
}

export default Register;