import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './SignUp/signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Practicals from './dashboard/Practicals';
import Interface from './LabInterface/Interface';
<<<<<<< HEAD
import Popup from './Popup'
=======
import Test from './Test';
>>>>>>> 57caceba699765d907c19f2b5f9c09a349bd1748

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Popup></Popup>
=======

      {/* <Test/> */}
>>>>>>> 57caceba699765d907c19f2b5f9c09a349bd1748
  <Router>
  <Routes>
        {/* <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/canvas" element={<Interface/>}/> */}

      
  </Routes>  

 </Router>

       
    </div>
  );
}

export default App;
