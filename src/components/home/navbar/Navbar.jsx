import TestLogo from '../../../assets/TestLogo.svg';
import DoctorW from '../../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white p-4 rounded-3xl" >
    <div className="container mx-auto flex justify-between items-center">
      {/* <!-- Logo Section --> */}
      <div className="flex items-center">
        <img src={TestLogo} alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl">Tach Care</span>
      </div>

      {/* <!-- Menu Section --> */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
        <a href="#" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>

      {/* <!-- Account Holder Section --> */}
      <div className="flex items-center space-x-4">
        <img src={DoctorW} alt="Profile Picture" className="h-8 w-8 rounded-full"/>
        <span className="text-sm font-medium">John Doe</span>
        <div className='flex items-center'>
        <IoSettingsOutline />
        <IoMdMore />
        </div>
      </div>
    </div>
  </nav>
        </div>
    );
};

export default Navbar;