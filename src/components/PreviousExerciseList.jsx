import React from 'react';
import PreviousExercise from './PreviousExercise';
import PropTypes from 'prop-types';

function PreviousExerciseList(props) {
  return(
    <div>
      {Object.keys(props.masterWorkoutList).map((workoutId) => {
        let workout = props.masterWorkoutList[workoutId];
        return(
          <PreviousExercise
            key={workoutId}
            workoutTitle={workout.workoutTitle}
            date={workout.date}
            id={workout.id}
            onAutoFillingEditForm={props.onAutoFillingEditForm}
          />
        );
      })}
    </div>
  );
}

PreviousExerciseList.propTypes = {
  masterWorkoutList: PropTypes.object,
  onAutoFillingEditForm: PropTypes.func
};


export default PreviousExerciseList;
