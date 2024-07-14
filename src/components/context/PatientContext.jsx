// PatientContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [patientsDetails, setPatientsDetails] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [activePatientHistory, setActivePatientHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev/', {
          auth: {
            username: 'coalition',
            password: 'skills-test'
          }
        });
        const data = response.data;
        setPatientsDetails(data);

        const filteredPatients = data.map(patient => ({
          name: patient.name,
          profile_picture: patient.profile_picture,
          gender: patient.gender,
          age: patient.age,
          date_of_birth : patient.date_of_birth,
          phone_number : patient.phone_number,
          insurance_type : patient.insurance_type,
          emergency_contact : patient.emergency_contact,
        }));

        setPatients(filteredPatients);

        if (filteredPatients.length > 0) {
          setActivePatient(filteredPatients[0]);
          const initialHistoryData = data.find(element => element.name === filteredPatients[0].name);
          setActivePatientHistory(initialHistoryData);
        }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (activePatient) {
      const historyData = patientsDetails.find((element) => element.name === activePatient.name);
      setActivePatientHistory(historyData);
    }
  }, [activePatient, patientsDetails]);

  return (
    <PatientContext.Provider value={{ patients, activePatient, setActivePatient, patientsDetails, activePatientHistory }}>
      {children}
    </PatientContext.Provider>
  );
};
