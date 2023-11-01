import {useState,ChangeEvent,FormEvent} from 'react';
import { CreateUser,LoginUser } from '../interfaces/user.interface';
const API="http://localhost:4000/api";

function Login() {
    const[token,setToken]=useState<string>();
    const [user,setUser]=useState({
        _id:"",
        gmail:"",
        password:"",
    });
    
    const loginUserRequest =async (user:LoginUser)=>{
    const userr = fetch(`${API}/auth/login`,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    })
    return userr;
    };
    const getTaskRequest = async ()=>await fetch(`${API}/auth/login`).then(res=>res.text()).then(data=>setToken(data));

    const tokenRequest =async (user:LoginUser)=>{
        const userr = fetch(`${API}/auth/login`,{
            method:'GET',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        return userr;
    };
    const handlerSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const prueba = await loginUserRequest(user);
        const tokenn = await getTaskRequest();
        console.log("INgresando al LOgin");
        console.log(prueba);
        console.log(token);
    }  
    const handlerChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUser({... user,[e.target.name]: e.target.value});
    }

    return (
        <div className="font-sans  ">
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-zinc-900 ">
        <div className="relative sm:max-w-sm w-full">
            <div className="card bg-gray-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-gray-900 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4  bg-gray-950 shadow-md">
                <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Ingresar
                </label>
                <form method="" action="" onSubmit={handlerSubmit} className="mt-10">
                                    
                    <div className="mt-7">                
                        <input type="text" onChange={handlerChange} name='gmail' placeholder="Correo electronico" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">                
                        <input type="text" onChange={handlerChange} name='password' placeholder="Contraseña" className="mt-1 block w-full border-none bg-zinc-800 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                    </div>

                    <div className="mt-7">
                        <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            login
                        </button>
                    </div>
                    <div className="mt-7">
                        <div className="flex justify-center items-center">
                            <label className="mr-2 text-white" >¿No tienes una cuenta?</label>
                            <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Registro
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

export default Login;