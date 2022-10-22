import React, { useEffect } from 'react';
import { useState } from "react"
import {BsEmojiSmileFill,BsPersonCircle} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/Quicklab_logo.png';
import '../dashboard/dashboard.css';
import { FaPlus } from "react-icons/fa";
import Select from 'react-select'
// import Practicals from './Practicals';
import { searchItems } from './Practicals';
import './sidebar.css'


const Sidebar = ({chilren}) => {
  // const options = [
  //   { value: 'FORM 4', label: 'Form 4' },
  //   { value: 'FORM 3', label: 'Form 3' },
  //   { value: 'FORM 2', label: 'Form 2' },
  //   { value: 'FORM 1', label: 'Form 1' }
  // ]
  // const subjects = [
  //   { value: 'Physics', label: 'Physics' },
  //   { value: 'Chemistry', label: 'Chemistry' },
  //   { value: 'Biology', label: 'Biology' }

  // ]
  // const topics = [
  //   { value: 'Titration', label: 'Titration' },
  //   { value: 'ThemoChemistry', label: 'ThemoChemistry' },
  //   { value: 'Flame Test', label: 'Flame Test' },
  //   { value: 'Solubility', label: 'Solubility' },
  //   { value: 'Pendulumbob', label: 'Pendulumbob' },
  //   { value: 'Thermal Expansion', label: 'Thermal Expansion' },
  //   { value: 'Heat Transfer', label: 'Heat Transfer' },
  //   { value: 'Electrostatics', label: 'Electrostatics' },
  //   { value: 'Dichotomous Key', label: 'Dichotomous Key' },
  //   { value: 'Cell Mutation', label: 'Cell Mutation' },
  //   { value: 'Transpiration', label: 'Transpiration' },
  //   { value: 'Respiration', label: 'Respiration' },

  // ]

  

  const [query, setquery] = useState('')

  // const [search, setSearch] = useState([]);


  // useEffect(() =>{
  //   localStorage.setItem('search', JSON.stringify(search));
  // }, [search])

  // console.log(search)

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
    {/* <form action="/" method="get">
      <div className='se_pro'>
      <div>
        <input 
            type="text"
            id="header-search"
            placeholder="Search practicals"
            name="s" 
        /> 
        </div>
        <div className='prof'>
          <BsPersonCircle className='profile'/>
          </div>
          </div>
      
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
    </form> */}
{chilren}
    {/* <Practicals/> */}
    </div>
    </div>
  );
};

export default Sidebar;
