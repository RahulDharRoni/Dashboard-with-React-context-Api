import { useContext } from 'react';
import { PatientContext } from '../../../context/PatientContext';
import { FaBirthdayCake, FaVenus, FaPhone, FaPhoneAlt, FaHospital } from 'react-icons/fa';

const DocInfo = () => {
  const { activePatient } = useContext(PatientContext);

  if (!activePatient) {
    return <div className="p-4 bg-white rounded-lg shadow">No patient selected</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center">
      <img src={activePatient.profile_picture} alt={activePatient.name} className="w-40 h-40 rounded-full mb-4" />
      <div className="text-center">
        <p className="text-xl font-bold">{activePatient.name}</p>
        <div className="flex flex-col items-center mt-4 space-y-4 w-full">
          
          <div className="grid grid-cols-10 items-start space-x-2 w-full">
            <div className='col-span-1 flex justify-center items-center text-lg'>
                <FaBirthdayCake className="text-gray-600" />
            </div>
            <div className='col-span-9 flex flex-col items-start'>
              <p className="font-semibold text-xs">Date Of Birth</p>
              <span className='text-xs'>{activePatient.date_of_birth}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-10 items-start space-x-2 w-full">
            <div className='col-span-1 flex justify-center items-center text-lg'>
                <FaVenus className="text-gray-600" />
            </div>
            <div className='col-span-9 flex flex-col items-start'>
              <p className="font-semibold text-xs">Gender</p>
              <span className='text-xs'>{activePatient.gender}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-10 items-start space-x-2 w-full justify-start">
            <div className='col-span-1 flex justify-center items-center text-lg'>
                <FaPhone className="text-gray-600" />
            </div>
            <div className='col-span-9 flex flex-col items-start'>
              <p className="font-semibold text-xs">Contact Info</p>
              <span className='text-xs'>{activePatient.phone_number}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-10 items-start space-x-2 w-full">
            <div className='col-span-1 flex justify-center items-center text-lg'>
                <FaPhoneAlt className="text-gray-600" />
            </div>
            <div className='col-span-9 flex flex-col items-start'>
              <p className="font-semibold text-xs">Emergency Contact</p>
              <span className='text-xs'>{activePatient.emergency_contact}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-10 items-start space-x-2 w-full">
            <div className='col-span-1 flex justify-center items-center text-lg'>
                <FaHospital className="text-gray-600" />
            </div>
            <div className='col-span-9 flex flex-col items-start'>
              <p className="font-semibold text-xs">Insurance Provider</p>
              <span className='text-xs'>{activePatient.insurance_type}</span>
            </div>
          </div>

        </div>
      </div>
      <button className="mt-6 w-full px-4 py-2 bg-teal-500 text-white rounded-full text-sm">Show All Information</button>
    </div>
  );
};

export default DocInfo;
