import React from 'react';
import Exercise from './Exercise';

function ExerciseList() {
  const exerciseListStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '28px'
  }

  return(
    <div style={exerciseListStyles}>
      <Exercise></Exercise>
    </div>
  );
}

export default ExerciseList;
