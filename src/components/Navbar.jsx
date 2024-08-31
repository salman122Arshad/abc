import React from 'react';
import './Navbar.css';
import profileImage from './DrJose.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div className="logo-image"></div>
          <span className="app-name">Tech.Care</span>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li className="nav-item">Overview</li>
          <li className="nav-item active">Patients</li>
          <li className="nav-item">Schedule</li>
          <li className="nav-item">Message</li>
          <li className="nav-item">Transactions</li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="user-profile">
          <img src={profileImage} alt="Dr. Jose Simmons" className="profile-image" />
          <div className="user-info">
            <p>Dr. Jose Simmons</p>
            <span>General Practitioner</span>
          </div>
          <div className="settings-icon">⚙️</div>
          <div className="more-options-icon">⋮</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
