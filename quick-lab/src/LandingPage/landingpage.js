import "../LandingPage/landingpage.css"
import logo from '../Images/Quicklab_logo.png';
import { Link, useNavigate} from 'react-router-dom';
import demo from '../quicklabvideo.mp4'



const Landingpage = () => {
    const navigate=useNavigate()
    return (
        <div className="landingpg">
            <div className="overview">
            <div className="logo">
                <img src={logo} alt="logo" width={180} />
            </div>
            <h1>VIRTUAL LABORATORY</h1>
            <p>A laboratory that can 
            be accessed at all time by students.
             It is built with passion to give students more chances of accelerating the grades
             through doing enough practicals</p>
            <div className="getstartedbtn">
               <Link to='/signup'> <button type='submit'>Get Started</button></Link>
            </div>
            </div>
            <div className="video">
                <h3 className="watch">WATCH A DEMO</h3>
                <div className="demo">
                <iframe 
                src={demo}/>
                width="853"
                height="480"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                </div>
            </div>


        </div>
    )

}

export default Landingpage;