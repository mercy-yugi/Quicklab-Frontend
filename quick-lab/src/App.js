import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import SignupForm from './signup';
import LoginForm from './Login/login';
import Dashboard from './dashboard/Dashboard';



function App() {
  return (
    <div>
  <Router>
  <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Dashboard/>}/>

      
  </Routes>  

 </Router>
    {/* <SignupForm/> */}
    {/* <LoginForm/> */}
       
    </div>
  );
}

export default App;
