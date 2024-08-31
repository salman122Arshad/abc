import React from 'react';
import profileImage from './JessicaTaylor.png';

// Inline styles
const profileContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '250px', // Adjust width as needed
  padding: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '20px', // Add spacing below profile card
};

const profileImageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '16px', // Add spacing below image
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: '#212529',
  textAlign: 'center',
};

const detailsListStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
};

const detailsItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px solid #eaeaea',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#00c2cb',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '16px',
  fontWeight: 'bold',
  width: '100%', // Make button full width
};

const labResultsContainerStyle = {
  width: '250px', // Adjust width as needed
  padding: '16px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
  marginTop: '16px', // Add spacing above lab results
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px solid #eaeaea',
};

const downloadIconStyle = {
  cursor: 'pointer',
};

function ProfileSidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Profile Section */}
      <div style={profileContainerStyle}>
        <div style={profileImageStyle}>
          <img src={profileImage} alt="Jessica Taylor" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <h2 style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Jessica Taylor</h2>
        <ul style={detailsListStyle}>
          <li style={detailsItemStyle}>
            <span>📅 Date Of Birth:</span>
            <span>August 23, 1996</span>
          </li>
          <li style={detailsItemStyle}>
            <span>♀️ Gender:</span>
            <span>Female</span>
          </li>
          <li style={detailsItemStyle}>
            <span>📞 Contact Info.:</span>
            <span>(415) 555-1234</span>
          </li>
          <li style={detailsItemStyle}>
            <span>📞 Emergency Contacts:</span>
            <span>(415) 555-5678</span>
          </li>
          <li style={detailsItemStyle}>
            <span>🏥 Insurance Provider:</span>
            <span>Sunrise Health Assurance</span>
          </li>
        </ul>
        <button style={buttonStyle}>Show All Information</button>
      </div>

      {/* Lab Results Section */}
      <div style={labResultsContainerStyle}>
        <h3 style={titleStyle}>Lab Results</h3>
        <ul style={listStyle}>
          {['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays', 'Urine Test'].map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
              <span style={downloadIconStyle}>⬇️</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;
