import React from 'react';
import Welcome from './scenarios/Welcome';
import './style.css';

const AnimatedTypingComponent = ({ scenario }) => {
  return (
    <div className={`typing_${scenario}`}>
      {scenario === 'welcome' && <Welcome />}
    </div>
  );
};

export default AnimatedTypingComponent;
