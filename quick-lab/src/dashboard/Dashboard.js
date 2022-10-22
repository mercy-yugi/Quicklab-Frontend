import react from 'react';
import logo from '../Images/Quicklab_logo.png';
import '../dashboard/dashboard.css';
import Sidebar from './Sidebar';
import Practicals from '../dashboard/Practicals';

const Dashboard = () => {
    return (
        <div className='content-1'>
            <div className='first'>
            <Sidebar/>
            </div>
            <div className='sec'>
            <Practicals/>
            </div>
           
        </div>
    )


}

export default Dashboard;