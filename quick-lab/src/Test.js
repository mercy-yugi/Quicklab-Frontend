import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Test = () =>{

    const[practicals,setPracticals]=useState([])
    useEffect(()=>{
        fetchPractical()
    },[])

    const fetchPractical=()=>{
        axios.get("http://127.0.0.1:8000/api/instructions/")
   .then(res=>{
       setPracticals(res.data)  
      console.log(res.data)      
       })
       .catch(error=>{
           console.log(error)
       })
   }
    return(
        <div>

{practicals.map(item=>(
            <div className='one' key={item.title}>
            <img className='picture' src={`http://127.0.0.1:8000${item.image}`} alt='practical'/>
            <p className='practical_title'><b>{item.title}</b></p>
            <p className="practical_description" >{item.description}</p>
        </div>
          ))}
         
            {/* {practicals.map(item=>(
                <div> <h1>{item.title}</h1>
                <img src={item.image} alt='kkkkkkkkk' /></div>
            ))}
            */}
        </div>
    )

}

export  default Test