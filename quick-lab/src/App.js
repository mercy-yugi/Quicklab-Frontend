import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Practicals from './dashboard/Practicals';
import Interface from './labinterface/Interface';
import DigitalTimer from './labinterface/timer';


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
