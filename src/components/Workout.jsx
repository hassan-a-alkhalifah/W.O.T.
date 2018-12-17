import React from 'react';
import ExerciseList from './ExerciseList';
import calendarIcon from '../assets/images/calendar-icon.png';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import PropTypes from 'prop-types';

function Workout(props) {
  const workoutFormStyles = {
    height: '59px',
    backgroundColor: '#454545',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const spacerStyles = {
    width: '70px',
    height: '24px'
  };
  const calendarIconStyles = {
    width: '22px',
    height: '24px',
    margin: '0 12px'
  };
  const noteIconStyles = {
    width: '24px',
    height: '26px'
  };
  const addExerciseIconConainerStyles = {
    width: '100%',
    textAlign: 'center',
    marginBottom: '75px'
  };
  const addExerciseIconStyles = {
    width: '40px',
    height: '40px',
  };

  let _workoutTitleInput = '';

  return(
    <div>
      <style jsx>{`
          input {
            width: 185px;
            height: 34px;
            border: none;
            font-size: 14px;
            padding-left: 13px;
          }
          input::placeholder {
            color: #C7C5C5;
          }
      `}</style>
      <div style={workoutFormStyles}>
        <div style={spacerStyles}></div>
        <input
          type="text"
          placeholder="Enter Workout Title"
          name="workoutTitleInput"
          onChange={(event) => {props.onInputChange(event, 'workout');}}
          value={props.workoutTitleInput}
          ref={(input) => {_workoutTitleInput = input;}}
        />
        <img src={calendarIcon} alt="Calendar Icon" style={calendarIconStyles}/>
        <img src={noteIcon} alt="Note Icon" style={noteIconStyles}/>
      </div>
      <ExerciseList
        masterExerciseList={props.masterExerciseList}
        onInputChange={props.onInputChange}
        onAddingNewSet={props.onAddingNewSet}
      />
      <div style={addExerciseIconConainerStyles}>
        <img
          src={addExerciseIcon}
          alt="Add Exercise Icon"
          style={addExerciseIconStyles}
          onClick={() => {
            props.onAddingNewExercise();
          }}
        />
      </div>
    </div>
  );
}

Workout.propTypes = {
  masterExerciseList: PropTypes.object,
  workoutTitleInput: PropTypes.string,
  dateInput: PropTypes.string,
  workoutNotesInput: PropTypes.string,
  onInputChange: PropTypes.func,
  onAddingNewExercise: PropTypes.func,
  onAddingNewSet: PropTypes.func
};

export default Workout;
