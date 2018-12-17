import React from 'react';
import PropTypes from 'prop-types';

function PreviousExercise({ workoutTitle, date }) {
  return(
    <div>
      <p>{workoutTitle}</p>
      <p>{date}</p>
    </div>
  );
}

PreviousExercise.propTypes = {
  workoutTitle: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string
}

export default PreviousExercise;
