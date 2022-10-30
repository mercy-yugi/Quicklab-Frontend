import cell from '../Images/Cell mutation.png'
import flame from '../Images/Flame test.png'
import elect from '../Images/Electrostatics.png'
import pend from '../Images/Pendulum bob.png'
import solu from '../Images/Solubility.png'
import themo from '../Images/Thermochemistry.png'
import './practicals.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from "axios";
import {BsEmojiSmileFill,BsPersonCircle} from 'react-icons/bs';
import Select from 'react-select'
import { Link, useNavigate} from 'react-router-dom';
import Footer from '../Footer';


const Practicals=()=>{
  const apiLink="https://sheltered-earth-23604.herokuapp.com"
  const navigate = useNavigate()
    const options = [
        { value: 'FORM 4', label: 'Form 4' },
        { value: 'FORM 3', label: 'Form 3' },
        { value: 'FORM 2', label: 'Form 2' },
        { value: 'FORM 1', label: 'Form 1' }
      ]
      const subjects = [
        { value: 'Physics', label: 'Physics' },
        { value: 'Chemistry', label: 'Chemistry' },
        { value: 'Biology', label: 'Biology' }
    
      ]
      const topics = [
        { value: 'Titration', label: 'Titration' },
        { value: 'ThemoChemistry', label: 'ThemoChemistry' },
        { value: 'Flame Test', label: 'Flame Test' },
        { value: 'Solubility', label: 'Solubility' },
        { value: 'Pendulumbob', label: 'Pendulumbob' },
        { value: 'Thermal Expansion', label: 'Thermal Expansion' },
        { value: 'Heat Transfer', label: 'Heat Transfer' },
        { value: 'Electrostatics', label: 'Electrostatics' },
        { value: 'Dichotomous Key', label: 'Dichotomous Key' },
        { value: 'Cell Mutation', label: 'Cell Mutation' },
        { value: 'Transpiration', label: 'Transpiration' },
        { value: 'Respiration', label: 'Respiration' },
    
      ]
    const[
      title, setTitle]=useState('')
    const [practicals,setPracticals]=useState([])
    const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(practicals);
  const [details,setDetails] = useState({
    level: "",
    subject:"",
    topic:""        
})
const handleDetails = e =>{
    const {name,value} = e.target
    setDetails({
    ...details,//spread operator 
    [name]:value
    })
    console.log(details)
    if (searchInput !== '') {
      // console.log('Woww')
    const filteredData = practicals.filter((item) => {
      // if(item.title==topic && item.subject==subject){
        
      // }
        return Object.values(item.title).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    console.log('filtered data are ',filteredData)
    setFilteredResults(filteredData)
}
else{
  console.log('ahreee')
    setFilteredResults(practicals)
   
}
    }
    useEffect(()=>{
        // e.preventDefault()
        fetchPractical()
        console.log(title)
        localStorage.setItem('title', JSON.stringify(title));
        if(title!==''){
          navigate('/canvas')   
    }
    // else{
    //   console.log('You have not selected a practical')
    // }
       
    },[title])
  
    const searchItems = (searchvalue) => {
      console.log('filtered data are ',filteredResults)
        setSearchInput(searchvalue)
        if (searchInput !== '') {
          const filteredData = practicals.filter((item) => {
              return Object.values(item.title).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(practicals)
         
      }
      }
      const navigatetoInterface = (value) => {
        // e.preventDefault()
        setTitle(value)
        // setInstructions()
        console.log(value)  
      }
    //   useEffect(()=>{
    //     console.log(title)
    //     localStorage.setItem('title', JSON.stringify(title));
    //     if(title!==''){
    //       navigate('/canvas')   
    // }
    // else{
    //   console.log('You have not selected a practical')
    // }
    // }, [title])
    const fetchPractical=()=>{
         axios.get(`${apiLink}/api/practicals/`)
    .then(res=>{
        setPracticals(res.data)  
       console.log(res.data)      
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const len=filteredResults.length
    
    const getInstructions =() => {
      practicals.map(item=>
          console.log(item.instructions)
      )

    }
    

    // console.log(search)
    // if(practicals.length!==0){

    return (
      <div className='practical_container'>
{/* <Sidebar/> */}
<form action="/" method="get">
      <div className='se_pro'>
      <div>
        <input 
            type="text"
            id="header-search"
            placeholder="Search practicals"
            name="s" 
            onChange={(e)=>{searchItems(e.target.value)}} 

        /> 
        </div>
        <div className='prof'>
          <BsPersonCircle className='profile'/>
          </div>
          </div>
      
        <div className='options'>
          <div className='level'>
          <Select placeholder="Level" options={options} 
          onChange={ level=>handleDetails({target:{value:level.label, name:'level'}})}
          />
          </div>
          <div className='subject'>
          <Select placeholder="Subject" options={subjects}
          onChange={ subject=>handleDetails({target:{value:subject.label, name:'subject'}})}
          />
          </div>
          <div className='topics'>
          <Select placeholder="Topics" options={topics}
          onChange={ topic=>handleDetails({target:{value:topic.label, name:'topic'}})}
          />
          </div>
        
        </div>   
    </form>

        <h3 className='about_practical' >Available Practicals</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
            
        {len>=1 && <div className='all_practicals'>
          {filteredResults.slice(0,4).map(item=>(
            <div className='one' key={item.title} onClick={value=>navigatetoInterface({value:item.title}.value)}>
            <img className='picture' src={`https://res.cloudinary.com/duuajd4sr/${item.image}`} alt='practical'/>
            <p className='practical_title'><b>{item.title}</b></p>
            <p className="practical_description" >{item.description}</p>
        </div>
        
          ))} 
          </div> || practicals.length>=1 && <div className='all_practicals'>
           
          {practicals.slice(0,4).map(item=>(
            <div className='one' key={item.title} onClick={value=>navigatetoInterface({value:item.title}.value)}>
            <img className='picture' src={`https://res.cloudinary.com/duuajd4sr/${item.image}`} alt='practical' />
            <p className='practical_title'><b>{item.title}</b></p>
            <p className="practical_description" >{item.description}</p>
        </div>
          ))}
          </div>}     
                 
        <h3 className='about_practical' >The most tried out Practicals this Month</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
        <div className='all_practicals'>
           
          {practicals.slice(4,8).map(item=>(
            <div className='one' key={item.title} onClick={value=>navigatetoInterface({value:item.title}.value)}>
            <img className='picture' src={`https://res.cloudinary.com/duuajd4sr/${item.image}`} alt='practical' />
            <p className='practical_title'><b>{item.title}</b></p>
            <p className="practical_description" >{item.description}</p>
        </div>
          ))}
          </div>    
      <Footer/>
        
      </div>
    )}

export default Practicals
