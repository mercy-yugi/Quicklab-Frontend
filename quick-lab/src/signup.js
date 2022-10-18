import './signup.css';
// import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import myimage from './Images/Group 76.png'
import { FaLock } from "react-icons/fa";
import { AiFillLayout} from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import axios from "axios";
import Select from 'react-select'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()




function SignupForm() {
    const options = [
        { value: 'FORM 4', label: 'Form 4' },
        { value: 'FORM 3', label: 'Form 3' },
        { value: 'FORM 2', label: 'Form 2' },
        { value: 'FORM 1', label: 'Form 1' }
      ]
    const navigate = useNavigate()
    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        username: "",
        password:"",
        level:"" 
    })
    

    useEffect(()=>{
        console.log("some",user);
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
    
        })
        
        }


    const formSchema = yup.object().shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        username: yup.string().required(),
        // level: yup.string().required(),
        password: yup.string().min(3).max(8).required(),
        // confirmPassword: yup.string().required().oneOf([yup.ref('password'), null])

      })


const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema),
      });
     

    
const submitting=()=>{
    const 
    {first_name,last_name,username,password,level,} = user
    // console.log("users");
    if (first_name && last_name && username && level && password){
     axios.post("https://sheltered-earth-23604.herokuapp.com/api/register/",user )
.then(res=>{
        // res.header("Access-Control-Allow-Origin", "*");
        console.log(res)
        toast('You have successfully been registered to Quick lab, Login to continue' )
        navigate("/login")
        reset();
        refreshPage();
    
    })
    .catch(error=>{
        console.log(error)
        toast('Unable to register, please try again')

    })
    }
    else{
        console.log(user)
     alert("invalid input")
    };
}
const refreshPage = () => {
    navigate(0);
}



    return (

            <form onSubmit={handleSubmit(submitting)} >
            <div className='container'>
            <div className='image-container'>
            <img src={myimage} alt="woman" width={450} />
            </div>
            <div className='form-container'>
            <h3 className='headings'>Create an Account</h3>
            <div className="firstname-1">
            <div className='icons'>
                   <BsPersonFill/>
                </div>
                <div className="firstname">
                <input type="first_name" name="first_name" required placeholder='First Name'
                        {...register("first_name")}
                        onChange={handleChange}               
                         />
                {errors.firstName?.message}
                </div>  
            </div>

            <div className="lastname-1">
                <div className='icons'>
                   <BsPersonFill/>
                </div>
                <div className='lastname'>
                <input type="last_name" name="last_name" required placeholder='Last Name'
                       {...register("last_name")}
                       onChange={handleChange}               
                       />
                <i>{errors.lastName?.message}</i>
                </div>
            </div>

            <div className="username1">
            <div className='icons'>
                   <BsPersonFill/>
                </div>
            <div className="username-1">
                <input  type="username" name="username" required placeholder='UserName'
                       {...register("username")}
                       onChange={handleChange}               
                       />
                {errors.UserName?.message}
                </div>
            </div>
            <div className="level-1">
            <div className='icons'>
                   <AiFillLayout/>
                </div>

                <div className=''>
                <Select className='dropdown' name="level" placeholder="Level" options={options}  
                {...register("level")}
                onChange={ level=>handleChange({target:{value:level.label, name:'level'}})}

            />
                {errors.level?.message}
                </div>
            </div>

            <div className="password-1">
             <div className='icons'>
             <FaLock />
            </div>  
            <div className="password-1"> 
               <input type="password" name="password"  required  placeholder=' Password'
                       {...register("password")}
                       onChange={handleChange}               
                       />
                 <i>{errors.password?.message}</i>
                </div>
            </div>

            <div className="confirmpassword-1">
            <div className='icons'>
             <FaLock />
            </div> 
            < div className="confirmpassword">
                <input  type="password" name="confirm password" required placeholder='Confirm password'
                      {...register("confirmpassword")}
              
                      />
                </div>
                {errors.confirmPassword}
            </div>
             

            <div className="signupbtn">
                <button type='submit'  >SignUp</button>
            </div>

            <div className="login">
                <p>Already have an account? <span><Link style={{ color: '#00A9E5', textDecoration: 'inherit'}} to={'/login'}>Login</Link></span></p>
            </div>
        </div>
        </div>
         
        </form>
   
        
    );
 
}
export default SignupForm;