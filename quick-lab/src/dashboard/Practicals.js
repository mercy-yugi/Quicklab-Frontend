import image from '../Images/practicalImage.png'
import './practicals.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from "axios";
import {BsEmojiSmileFill,BsPersonCircle} from 'react-icons/bs';
import Select from 'react-select'
import '../dashboard/dashboard.css';
import { Link, useNavigate} from 'react-router-dom';







const Practicals=()=>{
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

    const [practicals,setPracticals]=useState([])
    const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(practicals);
  const [search, setSearch] = useState([]);



//   useEffect(() =>{
//     console.log(JSON.parse(localStorage.getItem('search')))
//     if(search){
//       setSearch(search);
//     }
//   }, []);
    

    useEffect((e)=>{
        // e.preventDefault()
        fetchPractical()
    },[])

    const searchItems = (searchvalue) => {
        // console.log(practicals)
        setSearchInput(searchvalue)
        if (searchInput !== '') {
            // console.log('Woww')
          const filteredData = practicals.filter((item) => {
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
      const navigatetoInterface = (e) => {
          navigate('/canvas')
          e.preventDefault()
      }

    const fetchPractical=()=>{
         axios.get("https://sheltered-earth-23604.herokuapp.com/api/practicals/")
    .then(res=>{
        setPracticals(res.data)       
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const len=filteredResults.length
    
    

    // console.log(search)
    // if(practicals.length!==0){

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
            onChange={(e)=>{searchItems(e.target.value)}} 

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
    </form>

        <h3 className='about_practical' >Available Practicals</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
                  <div className='all_practicals'>
                    <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{len>=1 && filteredResults[0].title || practicals.length!==0 && practicals[0].title  }</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one' onClick={navigatetoInterface}>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{len>=2 && filteredResults[1].title || practicals.length!==0 && practicals[1].title  }</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{len>=3 && filteredResults[2].title || practicals.length!==0 && practicals[2].title  }</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{len>=4 && filteredResults[3].title || practicals.length!==0 && practicals[3].title  }</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>
        </div>

        
            
        <h3 className='about_practical' >The most tried out Practicals this Month</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
        <div className='all_practicals'>
            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>
        </div>

        
      </div>
    )}

// }
export default Practicals
export function searchItems(searchvalue){}