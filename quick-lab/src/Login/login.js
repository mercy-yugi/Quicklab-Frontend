// import './App.css';
import './login.css';
import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import myimage from '../Images/Group 76.png'
import { BsPersonFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function LoginForm() {
    const navigate = useNavigate()
    
    const [user,setUser] = useState({
        username: "",
        password:""        

    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
    
        })
        }



    const formSchema = yup.object().shape({
        Username: yup.string().required(),
        password: yup.string().required('password required'),
      })
const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema),
      });
const onSubmitHandler = (e) => {
       e.preventDefault();
       reset();
    }

    const submitting=()=>{
        const {username,password} = user
        if (username && password){
         axios.post("https://sheltered-earth-23604.herokuapp.com/login/",user )
        .then(res=>{
            console.log(res.data)
                    reset();
                    notify()
                    navigate("/home")
        })
        .catch(error=>{
            console.log(error)
            toast('unable to login, make sure your username and password are correct')
            reset();

        })
        
        }
        else{
            console.log(user)
         alert("invalid input")
        };
    }

    const notify = () =>{
        toast("Login successfull")
     
    };


    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} >
            <div className='container'>
            <div className='image-container'>
            <img src={myimage} alt="woman" width={450} />
            </div>
            <div className='form-container1'>
            <h3 className='heading'>LogIn To Your Account</h3>
            <div class="username1">
                <div className='icons'>
                <BsPersonFill/>
                </div>
                <div className='username' >
                <input type="name" name="name" required placeholder='Username'
                    {...register("username")}
                    onChange={handleChange} 
                    />
                 <i>{errors.username?.message}</i>
                </div>
            </div>
            <div class="password-1">
            <div className='icons'>
                <FaLock/>
                </div>
                <div class="password">
                <input type="password" name="password" required placeholder='Password'
                 {...register("password")}
                 onChange={handleChange} 
                />
                </div>
            </div>
            <i>{errors.password?.message}</i>
            <div class="forgot">
                <p> Forgot password?</p>
            </div>
            <div class="loginbtn">
                <button type='submit' onClick={submitting} >Login</button>
            </div>
            <div class="signup">
                <p>Don't have an account? <span><Link style={{ color: '#00A9E5', textDecoration: 'inherit'}} to={'/'}>SignUp</Link></span></p>
            </div>
            </div>
        </div>
        </form>
    );
}
export default LoginForm;