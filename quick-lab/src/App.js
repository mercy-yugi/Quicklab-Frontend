import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './SignUp/signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Practicals from './dashboard/Practicals';
import Interface from './LabInterface/Interface';
import Test from './Test';

function App() {
  return (
    <div>

      {/* <Test/> */}
  <Router>
  <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/canvas" element={<Interface/>}/>

      
  </Routes>  

 </Router>

       
    </div>
  );
}

export default App;
