import React from 'react';
import PreviousExerciseList from './PreviousExerciseList';
import PropTypes from 'prop-types';

function ExerciseArchives(props) {

  const exerciseArchivesStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '28px 0'
  }
  const exerciseArchivesTitleStyles = {
    fontSize: '30px',
    marginBottom: '28px'
  };

  return(
    <div style={exerciseArchivesStyles}>
      <div style={exerciseArchivesTitleStyles}>Exercise Archives</div>
      <PreviousExerciseList
        masterWorkoutList={props.masterWorkoutList}
        onAutoFillingEditForm={props.onAutoFillingEditForm}
      />
    </div>
  );
}

ExerciseArchives.propTypes = {
  masterWorkoutList: PropTypes.object,
  onAutoFillingEditForm: PropTypes.func
}


export default ExerciseArchives;
