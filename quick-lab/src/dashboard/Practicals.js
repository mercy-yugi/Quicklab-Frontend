import './practicals.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from "axios";
import {BsPersonCircle} from 'react-icons/bs';
import Select from 'react-select'
import { useNavigate} from 'react-router-dom';
import Footer from '../Footer';


const Practicals=()=>{
  const apiLink="https://sheltered-earth-23604.herokuapp.com"
  const navigate = useNavigate()
    const options = [
        { value: 'FORM 4', label: 'Form 4' },
        { value: 'FORM 3', label: 'Form 3' },
        { value: 'FORM 2', label: 'Form 2' },
        { value: 'FORM 1', label: 'Form1' }
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
        { value: 'Acid-Base-Test', label: 'Acid-Base-Test' },
        { value: 'Electrostatics', label: 'Electrostatics' },
        { value: 'Paper Chromatography', label: 'Paper Chromatography' },
        { value: 'Cell Mutation', label: 'Cell Mutation' },
        { value: 'Transpiration', label: 'Transpiration' },
        { value: 'Respiration', label: 'Respiration' },
          
      ]
    // const [topics,setTopics]=useState([])
    const[level,setLevel]=useState('')
    const[subject,setSubject]=useState('')
    const[topic,setTopic]=useState('')
    const[title, setTitle]=useState('')
    const [practicals,setPracticals]=useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState(practicals);

    useEffect(()=>{
        fetchPractical()
        localStorage.setItem('title', JSON.stringify(title));
        if(title!==''){
          navigate('/canvas')   
    }
    },[title])

    const filterLevel = (practical)=>{
      const forms = practical.level
      return !level || level === forms
    }
    const filterSubject = (practical)=>{
      const subjects = practical.subject
      return !subject || subject === subjects
    }
    const filterTopic = (practical)=>{
      const topics = practical.title
      return !topic || topic === topics 
    }
    const filterSearch = (practical) => {
      return Object.values(practical.title).join('').toLowerCase().includes(searchInput.toLowerCase())
    }

const filtration = practicals.filter(filterSubject).filter(filterLevel).filter(filterTopic).filter(filterSearch)
    const getTopics=(practicals)=>{
      practicals.map(practical=>(
        topics.push({value:practical.title, label:practical.title})
       ))
    }


      const navigatetoInterface = (value) => {
        setTitle(value) 
      }
   
   const fetchPractical=()=>{
         axios.get(`${apiLink}/api/practicals/`)
    .then(res=>{
        setPracticals(res.data)
        setFilteredResults(practicals)  
        getTopics(res.data)
       console.log(res.data)      
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const len=filteredResults.length || filtration.length
  

    return (
      <div className='practical_container'>
<form action="/" method="get">
      <div className='se_pro'>
      <div>
        <input 
            type="text"
            id="header-search"
            placeholder="Search practicals"
            name="s" 
            onChange={(e)=>{setSearchInput(e.target.value)}} 
        /> 
        
        </div>
        <div className='prof'>
          <BsPersonCircle className='profile'/>
          </div>
          </div>

      
        <div className='options'>
          <div className='level'>
          <Select placeholder="Level" options={options} 
          onChange={level=>{setLevel(level.label)}}
          />
          </div>
          <div className='subject'>
          <Select placeholder="Subject" options={subjects}
          onChange={subject=>{setSubject(subject.label)}}
          />
          </div>
          <div className='topics'>
          <Select placeholder="Topics" options={topics}
          onChange={topic=>{setTopic(topic.label)}}
          />
          </div>
        
        </div>   
    </form>

        <h3 className='about_practical' >Available Practicals</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
            
        {len>=1 && <div className='all_practicals'>
          {filtration.slice(0,4).map(item=>(
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
