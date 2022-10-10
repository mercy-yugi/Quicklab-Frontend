import image from '../Images/practicalImage.jpeg'
import './practicals.css'
import { FaLongArrowAltRight } from "react-icons/fa";



const Practicals=()=>{
    return (
      <div className='practical_container'>
        <h3 className='about_practical' >Available Practicals</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
        <div className='all_practicals'>
            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>
        </div>

        <h3 className='about_practical' >The most tried out Practicals this Month</h3>
        <div className='see_all'> <span>See all</span> <FaLongArrowAltRight className='arrow' /></div>
        <div className='all_practicals'>
            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>

            <div className='one'>
                <img className='picture' src={image} alt='practical'/>
                <p className='practical_title'><b>Titration</b></p>
                <p>Base-acid titration intended to hep students understand  the reactions  </p>
            </div>
        </div>

        
      </div>
    )

}
export default Practicals