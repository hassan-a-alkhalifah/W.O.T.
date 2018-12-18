import React from 'react';
import ExerciseList from './ExerciseList';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import PropTypes from 'prop-types';

function Workout(props) {
  const workoutFormContainerStyles = {
    height: '104px',
    backgroundColor: '#454545',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const workoutFormStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px'
  };
  const spacerStyles = {
    width: '36px',
    height: '24px'
  };
  const noteIconStyles = {
    width: '24px',
    height: '26px',
    marginLeft: '12px'
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
  let _dateInput = '';

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
    <div style={workoutFormContainerStyles}>
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
          <img src={noteIcon} alt="Note Icon" style={noteIconStyles}/>
        </div>
        <input
          type='date'
          placeholder='Date'
          name="dateInput"
          onChange={(event) => {props.onInputChange(event, 'workout');}}
          value={props.dateInput}
          ref={(input) => {_dateInput = input;}}
          />
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
