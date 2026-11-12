 import {Navigate,useNavigate} from 'react-router'
 import {useState} from 'react'
 import {useForm} from 'react-hook-form'
 import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { store } from '../app/store'
import { addUser } from '../features/authSlice'

export const useAuth = ()=>{
     let navigate = useNavigate();
     let dispatch = useDispatch();

    const {register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm();

    const [registeredUsers, setRegisteredUsers] = useState(
        JSON.parse(localStorage.getItem("RegisterdUsers")) || [])
       

    const registerForm = (data)=>{
        
        let arr = [...registeredUsers,data]
        setRegisteredUsers(arr);
        localStorage.setItem("RegisterdUsers",JSON.stringify(arr))
        reset()
        toast.success("User registered successfully.")
    }


    const logInForm = (data)=>{
       let user =  registeredUsers.find((val)=>{
        return val.email === data.email && val.password === data.password;
       })
       
       if(!user) {
        toast.error("Invalid email or password!");
        return;
       }

       dispatch(addUser(user))
       localStorage.setItem("LoggedInUser",JSON.stringify(user))
       toast.success("Logged in successfully.")
        reset();
    }

    

     return {
        navigate,
        register,
    handleSubmit,
    errors,
    reset,
    registerForm,
    logInForm
     }
}