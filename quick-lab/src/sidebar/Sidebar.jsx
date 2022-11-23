import React from 'react';
import { useEffect, useState } from 'react';
import {BsEmojiSmileFill} from 'react-icons/bs';
import logo from '../Images/Quicklab_logo.png';
import './sidebar.css';
import { FaPlus } from "react-icons/fa";
import axios from "axios";


const Sidebar = ({chilren}) => {
  const apiLink="https://sheltered-earth-23604.herokuapp.com"
   const [query, setquery] = useState('')
   const[titlee, setTitle]=useState([])
   const[previousPractical,setPreviousPractical]=useState([])


   useEffect(()=>{
    const title = JSON.parse(localStorage.getItem('title'));  
    if (title) {
      console.log(titlee)
        fetchPractical(title)
     
       }
     
       console.log(previousPractical)      


   })
   const fetchPractical=(title)=>{
    axios.get(`${apiLink}/api/practicals/`)
.then(res=>{
   const previousPra= res.data.filter(pra=>pra.title===title) 
   console.log(res.data)
      setPreviousPractical(previousPra)
   })
   .catch(error=>{
       console.log(error)
   }) 
}
  return (
    <div className="home-container-1">
       <div className="logo">
           <img src={logo} alt="logo" />
           </div>
           <h4>Previous Practicals</h4>
           {previousPractical.length===0 && <div>
            <p>No practicals done yet</p>
           <BsEmojiSmileFill className='smile'/>
           <div className="icon">
            <FaPlus className='plus'/>
            <p>Take practical</p>
           </div>
            </div> ||              
            <div className='pra' key={previousPractical[0].title}>
            <img className='image' src={`https://res.cloudinary.com/duuajd4sr/${previousPractical[0].image}`} alt='practical'/>
            <p className='title'><b>{previousPractical[0].title}</b></p>
            <p className="description" >{previousPractical[0].description}</p>
              </div>
              }
           
    </div>
  );
};

export default Sidebar;
