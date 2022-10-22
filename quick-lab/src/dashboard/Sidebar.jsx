import React, { useEffect } from 'react';
import { useState } from "react"
import {BsEmojiSmileFill,BsPersonCircle} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/Quicklab_logo.png';
// import '../dashboard/dashboard.css';
import { FaPlus } from "react-icons/fa";
import Select from 'react-select'
import Practicals from './Practicals';
import { searchItems } from './Practicals';


const Sidebar = ({children}) => {

  const [query, setquery] = useState('')
  return (
    <div className='main-container'>
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
    <div>
   {children}
    {/* <Practicals/> */}
    </div>
    </div>
  );
};

export default Sidebar;
