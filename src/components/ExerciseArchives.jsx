import React from 'react';
import PreviousExerciseList from './PreviousExerciseList';
import PropTypes from 'prop-types';

function ExerciseArchives(props) {
  return(
    <div>
      <div>ExerciseArchives Component</div>
      <PreviousExerciseList
        masterWorkoutList={props.masterWorkoutList}
      />
    </div>
  );
}

ExerciseArchives.propTypes = {
  masterWorkoutList: PropTypes.object
}


export default ExerciseArchives;
