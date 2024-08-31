import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Import CSS file for styling

const SideBar = () => {
  const [patients, setPatients] = useState([]); // State to hold the patient data
  const [searchTerm, setSearchTerm] = useState(''); // State to manage search input

  useEffect(() => {
    // Function to fetch data from the API
    const fetchPatients = async () => {
      const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
      const username = 'coalition';
      const password = 'skills-test';
      
      // Encode username and password in Base64 for Basic Auth
      const headers = new Headers();
      headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });

        if (response.ok) {
          const data = await response.json();
          setPatients(data); // Update state with fetched patient data
        } else {
          console.error('Failed to fetch patients:', response.status);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients(); // Fetch data on component mount
  }, []);

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="side-nav">
      <div className="side-nav-header">
        <h2>Patients</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
        />
      </div>
      <div className="patient-list">
        {filteredPatients.map((patient, index) => (
          <div
            key={index}
            className={`patient-item ${patient.selected ? 'selected' : ''}`}
          >
            <img src={patient.profile_picture} alt={patient.name} className="patient-image" />
            <div className="patient-info">
              <h3>{patient.name}</h3>
              <p>{patient.gender}, {patient.age}</p>
            </div>
            <button className="more-options">•••</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
