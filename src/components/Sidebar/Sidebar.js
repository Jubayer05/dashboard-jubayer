/* eslint-disable react/self-closing-comp */
import React from 'react';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WarningIcon from '@material-ui/icons/Warning';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import box1 from '../../image/Logo.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="sidebar__img" src={box1} alt="" />
        <span className="sidebar__border"></span>
        <div className="sidebar__option">
          <AssignmentIcon className="sidebar__icon" />
          <span className="sidebar__text">Overview</span>
        </div>
        <div className="sidebar__option">
          <CloudOutlinedIcon className="sidebar__icon" />
          <span className="sidebar__text">Cloud</span>
        </div>
        <div className="sidebar__option">
          <SupervisorAccountIcon className="sidebar__icon" />
          <span className="sidebar__text">Sketch</span>
        </div>
        <div className="sidebar__option">
          <WarningIcon className="sidebar__icon" />
          <span className="sidebar__text">Experiment</span>
        </div>
        <div className="sidebar__option">
          <SecurityOutlinedIcon className="sidebar__icon" />
          <span className="sidebar__text">Security</span>
        </div>
        <div className="sidebar__option">
          <LanguageOutlinedIcon className="sidebar__icon" />
          <span className="sidebar__text">Ownership</span>
        </div>
        <div className="sidebar__option">
          <InvertColorsIcon className="sidebar__icon" />
          <span className="sidebar__text">A/B test</span>
        </div>
        <div className="sidebar__option">
          <ColorLensOutlinedIcon className="sidebar__icon" />
          <span className="sidebar__text">Colors</span>
        </div>
      </div>
      <div className="logout sidebar__option">
        <ExitToAppIcon className="sidebar__icon" />
        <span className="sidebar__text">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
