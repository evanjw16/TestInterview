import React from 'react';
import Navbar from './Navbar';

function Roadmap() {
  return (
    <div className="container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <div className="header">
          <h1 className="title">Product Roadmap</h1>
        </div>
        <div className="roadmap">
          <div className="quarter">
            <div className="quarter-header">
              <h3>Q1 2019</h3>
              <h4>January - March</h4>
            </div>
            <div className="task">
              <p>Re-designed the zero-g doggie bags.</p>
              <p>No more spills!</p>
              <div className="progress">
                <span>64%</span>
                <div className="dots">...</div>
              </div>
            </div>
            <div className="task">
              <p>Travel & Relocation Support</p>
              <div className="progress">
                <span>12%</span>
                <div className="dots">...</div>
              </div>
            </div>
            <button className="create-task">+ Create new task</button>
          </div>
        <div className="quarter">
          <div className="quarter-header">
            <h3>Q2 2019</h3>
            <h4>April - June</h4>
          </div>
          <h4>No Task Available</h4>
          <button className="create-task">+ Create new task</button>
        </div>
        <div className="quarter">
          <div className="quarter-header">
            <h3>Q3 2019</h3>
            <h4>July - September</h4>
          </div>
          <div className="task">
            <p>Bundle interplanetary analytics for improved transmission</p>
            <div className="progress">
              <span>90%</span>
              <div className="dots">...</div>
            </div>
          </div>
          <button className="create-task">+ Create new task</button>
        </div>
        <div className="quarter">
          <div className="quarter-header">
            <h3>Q4 2019</h3>
            <h4>October - December</h4>
          </div>
          <div className="task">
            <p>Data Migration: Performance & Culture End Game</p>
            <div className="progress">
              <span>63%</span>
              <div className="dots">...</div>
            </div>
          </div>
          <button className="create-task">+ Create new task</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Roadmap;
