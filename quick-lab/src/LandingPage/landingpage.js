import "../LandingPage/landingpage.css"
import logo from '../Images/Quicklab_logo.png';



const Landingpage = () => {
    return (
        <div className="landingpg">
            <div className="logo">
                <img src={logo} alt="logo" width={180} />
            </div>
            <h1>QUICk LAB</h1>
            <p>An interactive virtual laboratory that can <br></br> 
            be accessed at all time by students.</p>
            <div className="getstartedbtn">
                <button type='submit'  >Get Started</button>
            </div>


        </div>
    )

}

export default Landingpage;