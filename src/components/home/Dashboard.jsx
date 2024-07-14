import { PatientProvider } from '../context/PatientContext';
import Body from './dashboardBody/Body';
import Navbar from './navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <PatientProvider>
            <Body />
        </PatientProvider>
        </div>
    );
};

export default Dashboard;