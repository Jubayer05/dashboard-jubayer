import React from 'react';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
