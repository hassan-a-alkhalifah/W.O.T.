import React from 'react';
import Exercise from './Exercise';
import PropTypes from 'prop-types';

function ExerciseList(props) {
  const exerciseListStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '28px'
  };

  return(
    <div style={exerciseListStyles}>
      {Object.keys(props.masterExerciseList).map((exerciseId) => {
        let exercise = props.masterExerciseList[exerciseId];
        return(
          <Exercise
            key={exerciseId}
            exerciseId={exerciseId}
            exerciseName={exercise.exerciseName}
            setList={exercise.setList}
            onInputChange={props.onInputChange}
          />
        );
      })}
    </div>
  );
}

ExerciseList.propTypes = {
  masterExerciseList: PropTypes.object,
  setList: PropTypes.array,
  onInputChange: PropTypes.func
};

export default ExerciseList;
