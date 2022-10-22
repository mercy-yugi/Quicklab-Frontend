import react from 'react';
import logo from '../Images/Quicklab_logo.png';
import '../dashboard/dashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Foooter from '../Footer';
import Practicals from './Practicals';

const Dashboard = () => {
    return (
        <div className='dash'>
            <div className='sd' >
           <Sidebar/>
           </div>
           <div className='pr' >
           <Practicals/>
           </div>
           {/* <Foooter/> */}
        </div>
    )


}

export default Dashboard;