import React from 'react';
import ExerciseList from './ExerciseList';
import noteIcon from '../assets/images/note-icon.png';
import addExerciseIcon from '../assets/images/add-exercise-icon.png';
import PropTypes from 'prop-types';
import finishIcon from '../assets/images/finish-icon.png';
import disagreeIcon from '../assets/images/disagree-icon.png'

function Workout(props) {
  const workoutStyles = {
    paddingTop: '115px'
  };
  const checkIfLeavingPopUpModalStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(219, 219, 219, 0.5)'
  }
  const checkIfLeavingPopUpModalSubBackgroundStyles = {
    width: '265px',
    height: '130px',
    backgroundColor: '#FFF'
  }
  const popUpModalTextContainerStyles = {
    padding: '15px 0 0 20px',
    marginBottom: '15px'
  }
  const popUpModalButtonsContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  const finishAndDisagreeIconStyles = {
    width: '25px',
    height: '25px'
  };
  const workoutFormContainerStyles = {
    padding: '12px 0',
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
  const textAreaStyles = {
    width: '172px',
    padding: '13px',
    marginTop: '12px',
    fontSize: '14px'
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

  let textArea = null;
  if(props.isTextAreaVisible) {
    textArea =
      <textarea
        rows="4"
        cols="27"
        style={textAreaStyles}
        placeholder='Enter Workout Notes'
        name="workoutNotesInput"
        onChange={(event) => {props.onInputChange(event, 'workout');}}
        value={props.workoutNotesInput}
      >
      </textarea>;
  }

  let popUpModal = null;
  if(props.popUpModalVisible) {
    popUpModal =
    <div style={checkIfLeavingPopUpModalStyles}>
      <div style={checkIfLeavingPopUpModalSubBackgroundStyles}>
        <div style={popUpModalTextContainerStyles}>
          <p>Changes will not be saved</p>
          <p>Are you sure you would like to exit?</p>
        </div>
        <div style={popUpModalButtonsContainerStyles}>
          <img
            src={finishIcon}
            alt="Agree Icon"
            style={finishAndDisagreeIconStyles}
            onClick={() => {
              props.onPopUpModalVisibiltyChange("close");
              props.onResetForm();
            }}
          />
          <img
            src={disagreeIcon}
            alt="Disagree Icon"
            style={finishAndDisagreeIconStyles}
            onClick={() => {
              props.onPopUpModalVisibiltyChange("close");
            }}
          />
        </div>
      </div>
    </div>;
  }

  return(
    <div style={workoutStyles}>
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
          ::-webkit-datetime-edit-text {
            font-size: 14px;
          }
      `}</style>
      {popUpModal}
      <div style={workoutFormContainerStyles}>
        <div style={workoutFormStyles}>
          <div style={spacerStyles}></div>
          <input
            type="text"
            placeholder="Enter Workout Title"
            name="workoutTitleInput"
            onChange={(event) => {props.onInputChange(event, 'workout');}}
            value={props.workoutTitleInput}
          />
          <img
            src={noteIcon}
            alt="Note Icon"
            style={noteIconStyles}
            onClick={() => {
              props.onSettingTextAreaVisiblity();
            }}
          />
        </div>
        <input
          type='date'
          placeholder='Date'
          name="dateInput"
          onChange={(event) => {props.onInputChange(event, 'workout');}}
          value={props.dateInput}
        />
        {textArea}
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
  onAddingNewSet: PropTypes.func,
  isTextAreaVisible: PropTypes.bool,
  onSettingTextAreaVisiblity: PropTypes.func,
  onResetForm: PropTypes.func,
  onPopUpModalVisibiltyChange: PropTypes.func,
  popUpModalVisible: PropTypes.bool
};

export default Workout;
