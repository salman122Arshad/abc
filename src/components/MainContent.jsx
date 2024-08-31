import React from 'react';
import './MainContent.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure this import for Chart.js
import profileImage1 from './heart.png';
import profileImage2 from './respiratory.png';
import profileImage3 from './Temperature.png';

const MainContent = () => {
  // Chart data and options
  const chartData = {
    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 130, 160, 140, 150, 160],
        borderColor: '#e84b8a',
        backgroundColor: 'rgba(232, 75, 138, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#e84b8a',
        tension: 0.4,  // Smooth the line
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
      },
      {
        label: 'Diastolic',
        data: [80, 75, 70, 65, 78, 78],
        borderColor: '#8e5ff7',
        backgroundColor: 'rgba(142, 95, 247, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#8e5ff7',
        tension: 0.4,  // Smooth the line
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',  // Adjust the legend to the right to prevent overlap
        align: 'center', // Align legend items centrally
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20, // Add padding between legend and chart area
          color: '#2f3a4a',
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: {
        right: 50, // Add padding on the right to accommodate the legend
      },
    },
  };

  return (
    <div className="diagnosis-history">
      <h2 className="section-title">Diagnosis History</h2>

      {/* Blood Pressure Section */}
      <div className="blood-pressure-section">
        <div className="blood-pressure-chart-container" style={{display:"flex",flexDirection:"row"}}>
          <div className="chart-header">
            <h3 className="chart-title">Blood Pressure</h3>
            <select className="time-range-selector">
              <option>Last 6 months</option>
            </select>
          </div>

          {/* Chart Component */}
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Blood Pressure Info */}
          
        </div>
      </div>

      {/* Vital Signs Cards */}
      <div className="vital-signs-cards" style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', padding: '20px' }}>
  <div className="card respiratory-rate" style={{ backgroundColor: '#e0f7fa', borderRadius: '8px', padding: '20px', width: '150px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <div className="icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <img src={profileImage1} alt="Respiratory Rate" style={{ width: '40px', height: '40px' }} />
    </div>
    <div className="details">
      <span className="title" style={{ display: 'block', fontSize: '14px', color: '#666', marginBottom: '5px' }}>Respiratory Rate</span>
      <span className="value" style={{ display: 'block', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>20 bpm</span>
      <span className="label" style={{ display: 'block', fontSize: '12px', color: '#666', marginTop: '5px' }}>Normal</span>
    </div>
  </div>
  
  <div className="card temperature" style={{ backgroundColor: '#fdecea', borderRadius: '8px', padding: '20px', width: '150px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <div className="icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <img src={profileImage2} alt="Temperature" style={{ width: '40px', height: '40px' }} />
    </div>
    <div className="details">
      <span className="title" style={{ display: 'block', fontSize: '14px', color: '#666', marginBottom: '5px' }}>Temperature</span>
      <span className="value" style={{ display: 'block', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>98.6°F</span>
      <span className="label" style={{ display: 'block', fontSize: '12px', color: '#666', marginTop: '5px' }}>Normal</span>
    </div>
  </div>
  
  <div className="card heart-rate" style={{ backgroundColor: '#fde8ec', borderRadius: '8px', padding: '20px', width: '150px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <div className="icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <img src={profileImage3} alt="Heart Rate" style={{ width: '40px', height: '40px' }} />
    </div>
    <div className="details">
      <span className="title" style={{ display: 'block', fontSize: '14px', color: '#666', marginBottom: '5px' }}>Heart Rate</span>
      <span className="value" style={{ display: 'block', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>78 bpm</span>
      <span className="label" style={{ display: 'block', fontSize: '12px', color: '#f44336', marginTop: '5px' }}>Lower than Average</span>
    </div>
  </div>
</div>


      {/* Diagnostic List Section */}
      <div className="diagnostic-list">
        <h3 className="list-title">Diagnostic List</h3>
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Under Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance and elevated blood sugar</td>
              <td>Cured</td>
            </tr>
            <tr>
              <td>Asthma</td>
              <td>Recurrent episodes of bronchial constriction</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
