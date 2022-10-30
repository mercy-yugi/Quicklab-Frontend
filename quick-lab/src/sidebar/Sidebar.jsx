import React from 'react';
import { useEffect, useState } from 'react';
import {BsEmojiSmileFill} from 'react-icons/bs';
import logo from '../Images/Quicklab_logo.png';
import './sidebar.css';
import { FaPlus } from "react-icons/fa";
import Practicals from '../dashboard/Practicals';


const Sidebar = ({chilren}) => {
   const [query, setquery] = useState('')
   const[titlee, setTitle]=useState([])


   useEffect(()=>{
    const title = JSON.parse(localStorage.getItem('title'));  
    if (title) {
      titlee.push(title);
      console.log(titlee)
       }

   })


  return (
    <div className="home-container-1">
       <div className="logo">
           <img src={logo} alt="logo" width={100} />
           </div>
           <h4>Previous Practicals</h4>
           <p>No practicals done yet</p>
           <BsEmojiSmileFill className='smile'/>
           <div className="icon">
            <FaPlus className='plus'/>
            <p>Take practical</p>
           </div>
    </div>
  );
};

export default Sidebar;
