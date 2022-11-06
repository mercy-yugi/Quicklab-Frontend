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
        <Route path="/demo" element={<Landingpage/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/canvas" element={<Interface/>}/>     
  </Routes>  
 </Router> 
    </div>
  );
}

export default App;
