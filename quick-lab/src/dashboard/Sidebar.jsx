import React from 'react';
import {BsEmojiSmileFill,BsPersonCircle} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/Quicklab_logo.png';
import '../dashboard/dashboard.css';
import { FaPlus } from "react-icons/fa";
import Select from 'react-select'


const Sidebar = () => {

  const options = [
    { value: 'FORM 4', label: 'Form 4' },
    { value: 'FORM 3', label: 'Form 3' },
    { value: 'FORM 2', label: 'Form 2' },
    { value: 'FORM 1', label: 'Form 1' }
  ]
  const subjects = [
    { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Biology', label: 'Biology' },

  ]
  const topics = [
    { value: 'Titration', label: 'Titration' },
    { value: 'Pendulumbob', label: 'Pendulumbob' },
    { value: 'Electrolysis', label: 'Electrolysis' },

  ]
  return (
    <div className='main-container'>
    <div className="home-container-1">
       <div className="logo">
           <img src={logo} alt="logo" width={100} />
           </div>
           <h4>Previous Practicals</h4>
           <BsEmojiSmileFill className='smile'/>
           <div className="icon">
            <FaPlus className='plus'/>
            <p>Take practical</p>
           </div>
    </div>
    <div>
    <form action="/" method="get">
      <div className='se_pro'>
      <div>
        <input
        
            type="text"
            id="header-search"
            placeholder="Search practicals"
            name="s" 
            {...<FaSearch/>}
        /> </div>
        <div className='prof'>
          <BsPersonCircle className='profile'/>
          </div>
          </div>
        {/* <span><FaSearch className='search'/></span> */}
        {/* <span><button type="submit">Search</button></span> */}
        <div className='options'>
          <div className='level'>
          <Select placeholder="Level" options={options} />
          </div>
          <div className='subject'>
          <Select placeholder="Subject" options={subjects} />
          </div>
          <div className='topics'>
          <Select placeholder="Topics" options={topics} />
          </div>
        
        </div>
       
    </form>
    </div>
    </div>
  );
};

export default Sidebar;