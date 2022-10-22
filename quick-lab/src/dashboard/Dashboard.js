import react from 'react';
import logo from '../Images/Quicklab_logo.png';
import '../dashboard/dashboard.css';
import Sidebar from './Sidebar';
import Practicals from './Practicals';
import Foooter from '../Footer';

const Dashboard = () => {
    return (
        <div className='main'>
           <Sidebar/>
           <Practicals/>
           
           {/* <Foooter/> */}
        </div>
    )


}

export default Dashboard;