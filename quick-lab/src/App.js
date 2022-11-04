import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './SignUp/signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Interface from './LabInterface/Interface';
import Landingpage from './LandingPage/landingpage';


function App() {
  return (
    <div>
  <Router>
  <Routes>

      
       <Route path="/" element={<SignupForm/>}/>
       <Route path="/login" element={<LoginForm/>}/>

        <Route path="/" element={<SignupForm/>}/>

        <Route path="/" element={<Landingpage/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
>>>>>>> 51d8f6a69fb057ffeabd1641cc4d469ad5d653e7
        <Route path="/login" element={<LoginForm/>}/>
>>>>>>> 68eb86b0cd7903c0090138325d9ef2fd6bf5d813
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/canvas" element={<Interface/>}/>     
  </Routes>  
 </Router> 
    </div>
  );
}

export default App;
