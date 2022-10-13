import image from '../Images/practicalImage.png'
import './practicals.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from "axios";





const Practicals=()=>{

    const [practicals,setPracticals]=useState('')
    const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
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
    //  searchItems()        
    },[])

    const searchItems = (searchvalue) => {
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

    const fetchPractical=()=>{
         axios.get("http://127.0.0.1:8000/api/practicals/")
    .then(res=>{
        setPracticals(res.data)        
        })
        .catch(error=>{
            console.log(error)
        })
        }
    // console.log(search)
    if(practicals.length!==0){

    return (
      <div className='practical_container'>
        <h3 className='about_practical' >Available Practicals</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
                  <div className='all_practicals'>
                    <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{practicals[1].title}</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{practicals[0].title}</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{practicals[1].title}</b></p>
                <p className="practical_description" >Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>{practicals[0].title}</b></p>
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

}
export default Practicals
export function searchItems(searchvalue){}