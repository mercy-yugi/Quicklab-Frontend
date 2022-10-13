import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';
import Practicals from './dashboard/Practicals';



function App() {
  return (
    <div>
      {/* <Dashboard/> */}
  <Router>
  <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Dashboard/>}/>

      
  </Routes>  

 </Router>

       
    </div>
  );
}

export default App;
