import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MainContent from './MainContent/MainContent';
import './Main.css';

const Main = () => {
  return (
    <div className="dashboard__main">
      <div className="main__header">
        <h1 className="main__title">Overview</h1>
        <div className="dashboard__btnGroup">
          <button type="button" className="main__btn">
            <MoreHorizIcon className="main__btnIcon" />
          </button>
          <button type="button" className="main__btn btn__add">
            Add
          </button>
        </div>
      </div>
      <MainContent />
    </div>
  );
};

export default Main;
