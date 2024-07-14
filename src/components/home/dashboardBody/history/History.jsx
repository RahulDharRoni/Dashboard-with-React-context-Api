import { useContext, useMemo } from 'react';
import { PatientContext } from '../../../context/PatientContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const History = () => {
  const { activePatientHistory } = useContext(PatientContext);

  // Safely access the diagnosis history and diagnostic list
  const diagnosisHistory = activePatientHistory?.diagnosis_history || [];
  const diagnosticListHistory = activePatientHistory?.diagnostic_list || [];

  const chartData = useMemo(() => {
    const labels = diagnosisHistory.map(data => `${data.month} ${data.year}`);
    const bloodPressureSystolicData = diagnosisHistory.map(data => data.blood_pressure?.systolic?.value);
    const bloodPressureDiastolicData = diagnosisHistory.map(data => data.blood_pressure?.diastolic?.value);

    return {
      labels,
      datasets: [
        {
          label: 'Systolic',
          data: bloodPressureSystolicData,
          borderColor: '#EC4899',
          backgroundColor: 'rgba(236, 72, 153, 0.2)',
          fill: false
        },
        {
          label: 'Diastolic',
          data: bloodPressureDiastolicData,
          borderColor: '#7C3AED',
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
          fill: false
        }
      ]
    };
  }, [diagnosisHistory]);

  // Calculate lowest metrics
  const hartRateData = diagnosisHistory.map(data => data.heart_rate?.value).filter(value => value !== undefined && value !== null);
  const temperatureData = diagnosisHistory.map(data => data.temperature?.value).filter(value => value !== undefined && value !== null);
  const respiratoryRateData = diagnosisHistory.map(data => data.respiratory_rate?.value).filter(value => value !== undefined && value !== null);

  const lowestHeartRate = hartRateData.length > 0 ? Math.min(...hartRateData) : 'N/A';
  const lowestTemperature = temperatureData.length > 0 ? Math.min(...temperatureData) : 'N/A';
  const lowestRespiratoryRate = respiratoryRateData.length > 0 ? Math.min(...respiratoryRateData) : 'N/A';

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    }
  };

  return (
    <div className="col-span-3">
      <div className="p-6 bg-white rounded-lg shadow col-span-3">
      <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>
      <div className="mb-6 bg-[#F4F0FE] p-3 rounded-lg">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 p-4 bg-blue-100 rounded-lg flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">{lowestRespiratoryRate || 'N/A'} bpm</div>
          <div className="text-lg">Respiratory Rate</div>
          <div className="text-gray-600">Lowest Respiratory Rate</div>
        </div>
        <div className="flex-1 p-4 bg-red-100 rounded-lg flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">{lowestTemperature || 'N/A'}°F</div>
          <div className="text-lg">Temperature</div>
          <div className="text-gray-600">Lowest Temperature</div>
        </div>
        <div className="flex-1 p-4 bg-pink-100 rounded-lg flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">{lowestHeartRate || 'N/A'} bpm</div>
          <div className="text-lg">Heart Rate</div>
          <div className="text-gray-600">Lowest Heart Rate</div>
        </div>
      </div>

      </div>
      
      <div className="mt-3 p-6 bg-white rounded-lg shadow text-sm text-start">
        <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Problem/Diagnosis
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {diagnosticListHistory.map((diagnosis, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">{diagnosis.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{diagnosis.description}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{diagnosis.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
