import React, { useState } from 'react';
import Navbar from './Navbar';

function Roadmap() {
  const [tasks, setTasks] = useState({
    q1: [
      { description: 'Re-designed the zero-g doggie bags.', progress: 64 },
      { description: 'Travel & Relocation Support', progress: 12 }
    ],
    q2: [],
    q3: [
      { description: 'Bundle interplanetary analytics for improved transmission', progress: 90 }
    ],
    q4: [
      { description: 'Data Migration: Performance & Culture End Game', progress: 63 }
    ]
  });

  const addTask = (quarter) => {
    const newTaskDescription = prompt('Enter task description:');
    const newTaskProgress = parseInt(prompt('Enter task progress percentage:'), 10);

    if (newTaskDescription && !isNaN(newTaskProgress)) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [quarter]: [
          ...prevTasks[quarter],
          { description: newTaskDescription, progress: newTaskProgress }
        ]
      }));
    } else {
      alert('Invalid input. Please enter a valid task description and progress percentage.');
    }
  };

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
          {['q1', 'q2', 'q3', 'q4'].map((quarter, index) => (
            <div className="quarter" key={quarter}>
              <div className="quarter-header">
                <h3>{`Q${index + 1} 2019`}</h3>
                <h4>{['January - March', 'April - June', 'July - September', 'October - December'][index]}</h4>
              </div>
              {tasks[quarter].length > 0 ? (
                tasks[quarter].map((task, taskIndex) => (
                  <div className="task" key={taskIndex}>
                    <p>{task.description}</p>
                    <div className="progress">
                      <span>{`${task.progress}%`}</span>
                      <div className="dots">...</div>
                    </div>
                  </div>
                ))
              ) : (
                <h4>No Task Available</h4>
              )}
              <button className="create-task" onClick={() => addTask(quarter)}>+ Create new task</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
