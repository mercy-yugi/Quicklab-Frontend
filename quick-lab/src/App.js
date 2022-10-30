import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './SignUp/signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Interface from './LabInterface/Interface';
<<<<<<< HEAD

=======
>>>>>>> 68eb86b0cd7903c0090138325d9ef2fd6bf5d813

function App() {
  return (
    <div>
  <Router>
  <Routes>
<<<<<<< HEAD
      
       <Route path="/" element={<SignupForm/>}/>
       <Route path="/login" element={<LoginForm/>}/>
=======
        <Route path="/" element={<SignupForm/>}/>
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
