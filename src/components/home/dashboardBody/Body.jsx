import DocInfo from "./doctorInfo/DocInfo";
import History from "./history/History";
import PatientList from "./patientList/PatientList";
import { useContext } from 'react';
import { PatientContext } from "../../context/PatientContext";

const Body = () => {


  const { patients, setActivePatient } = useContext(PatientContext);
console.log(patients)
  return (
    <div className="container mx-auto py-3 grid grid-cols-5 gap-4">
       <PatientList patients={patients} onPatientClick={setActivePatient} />
       
      <History />
      <DocInfo />
    </div>
  );
};

export default Body;
