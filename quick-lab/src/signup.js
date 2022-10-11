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
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
toast.configure()




function SignupForm() {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        username: "",
        password:"",
        level:""
        

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
        level: yup.string().required(),
        password: yup.string().min(8).max(15).required(),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), null])

      })


const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema),
      });
     
const onSubmitHandler = (e) => {
        e.preventDefault();
    
    }
    
const submitting=()=>{
    const {first_name,last_name,username,password,level,} = user
    if (first_name && last_name && username && level && password){
     axios.post("https://vast-reef-39990.herokuapp.com/Quicklab/register/",user )
.then(res=>{
        console.log(res)
        toast('You have successfully been registered to Quick lab, Login to continue' )
        navigate("/login")
        reset();
        // refreshPage();

    
    })
    .catch(error=>{
        console.log(error)
        toast('Unable to register, to try again')

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

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;
     
    return (

            <form onSubmit={handleSubmit(onSubmitHandler)} >
            <div className='container'>
            <div className='image-container'>
            <img src={myimage} alt="woman" width={450} />
            </div>
            <div className='form-container'>
            <h3 className='headings'>Create an Account</h3>
            <div class="firstname-1">
            <div className='icons'>
                   <BsPersonFill/>
                </div>
                <div class="firstname">
                <input type="first_name" name="first_name" required placeholder='First Name'
                        {...register("first_name")}
                        onChange={handleChange}               
                         />
                {errors.firstName?.message}
                </div>  
            </div>

            <div class="lastname-1">
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

            <div class="username1">
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
            <div class="level-1">
            <div className='icons'>
                   <AiFillLayout/>
                </div>

                <div className='level'>
                    <DropDownListContainer><input  type="text" name="level" required placeholder='Level'
                      {...register("level")}
                      onChange={handleChange}               
                      /></DropDownListContainer>
                      <DropDownList>
                        <ListItem>Form 1</ListItem>
                        <ListItem>Form 2</ListItem>
                        <ListItem>Form 3</ListItem>
                        <ListItem>Form 4</ListItem>
                        </DropDownList>
                {errors.level?.message}
                </div>
            </div>

            <div class="password-1">
             <div className='icons'>
             <FaLock />
            </div>  
            <div class="password-1"> 
               <input type="password" name="password"  required  placeholder=' Password'
                       {...register("password")}
                       onChange={handleChange}               
                       />
                 <i>{errors.password?.message}</i>
                </div>
            </div>

            <div class="confirmpassword-1">
            <div className='icons'>
             <FaLock />
            </div> 
            < div className="confirmpassword">
                <input  type="password" name="confirm password" required placeholder='Confirm password'
                      {...register("confirmpassword")}
                      onChange={handleChange}               
                      />
                </div>
                {errors.confirmPassword}
            </div>
            

            <div class="signupbtn">
                <button type='submit' onClick={submitting} >SignUp</button>
            </div>

            <div class="login">
                <p>Already have an account? <span><Link style={{ color: '#00A9E5', textDecoration: 'inherit'}} to={'/login'}>Login</Link></span></p>
            </div>
        </div>
        </div>
         
        </form>
        
    );
}
export default SignupForm;