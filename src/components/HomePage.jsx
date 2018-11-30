import React from 'react';
import { Link } from 'react-router-dom';

function ExerciseArchives() {
  return(
    <div>
      <button><Link to='startNewWorkout'>Start New Workout</Link></button>
      <button><Link to='exerciseArchives'>Exercise Archives</Link></button>
    </div>
  );
}

export default ExerciseArchives;
