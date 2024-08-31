// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ProfileSidebar from './components/ProfileSidebar';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar className="navbar" />
    <div className="app-container">
      <Sidebar className="sidebar" />
      <MainContent className="main-content" />
      <ProfileSidebar className="profile-sidebar" />
    </div>
    </>
  );
}

export default App;
