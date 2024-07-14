import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const PatientList = ({ patients, onPatientClick }) => {
  console.log(patients);

  return (
    <div className="p-4 bg-white rounded-lg shadow ">
      <div className="flex justify-between items-center mb-3">
         <h4 className="text-lg font-bold">Patients</h4>
        <CiSearch />
     </div>
      <div>
    
      <div className="overflow-y-auto max-h-screen">
      {patients.map((patient, index) => (
        <div className="grid grid-cols-10 py-3 hover:bg-[#F4F0FE]" key={index} onClick={() => onPatientClick(patient)}>
        <div className="col-span-8 grid grid-cols-10 items-center">
          <div className="col-span-3 flex items-center justify-center active">
            <img src={patient.profile_picture} alt={patient.name} className="w-[32px] h-[32px]" /></div>
          <div className="ml-2 col-span-7">
            <p className="text-xs font-bold text-start">{patient.name}</p>
            <div className="flex text-xs justify-between">
              <p>{patient.gender}</p>
              <p>{patient.age} years</p>
            </div>
          </div>
        </div>
          <div className="col-span-2 flex items-center justify-end">
            <IoMdMore />
          </div>
        </div>
      ))}
      </div>
      
    </div>
    </div>
    
  );
};

export default PatientList;
