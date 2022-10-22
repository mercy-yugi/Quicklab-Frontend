import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './SignUp/signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Practicals from './dashboard/Practicals';
import Interface from '../src/LabInterface/Interface';
// import DigitalTimer from '../src/LabInterface/';


function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <DigitalTimer/> */}
  <Router>
  <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/canvas" element={<Interface/>}/>

      
  </Routes>  

 </Router>

       
    </div>
  );
}

export default App;
