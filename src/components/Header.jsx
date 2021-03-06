import React from 'react';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';
import { addWorkout, editWorkout, deleteSelectedWorkouts } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  const headerStyles = {
    width: '100%',
    position: 'fixed'
  };
  const mainTitleContainerSyles = {
    height: '68px',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '26px'
  };
  const navigationBarStyles = {
    height: '47px',
    backgroundColor: '#DBDBDB',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  const homeIconStyles = {
    width: '29px',
    height: '29px'
  };
  const archiveIconStyles = {
    width: '30px',
    height: '26px'
  };
  const finishIconStyles = {
    width: '25px',
    height: '25px'
  };
  const deleteIconStyles = {
    width: '30px',
    height: '30px'
  };

  function newWorkoutFormSubmission() {
    const { dispatch } = props;
    if(props.selectedWorkoutToBeEditedId === null) {
      dispatch(addWorkout(props.workoutTitleInput, props.dateInput, props.workoutNotesInput, props.masterExerciseList));
    } else {
      dispatch(editWorkout(props.selectedWorkoutToBeEditedId, props.workoutTitleInput, props.dateInput, props.workoutNotesInput, props.masterExerciseList));
      props.onResettingSelectedWorkoutToBeEditedId();
    }
    props.onResetForm();
  }

  function deleteWorkoutsSubmission() {
    const {  dispatch } = props;
    dispatch(deleteSelectedWorkouts(props.workoutCheckboxCheckedList));
  }

  let deletedButton = null;
  if(props.exerciseCheckboxCheckedList.length !== 0 || props.setCheckboxCheckedList.length !== 0 || props.workoutCheckboxCheckedList.length !== 0) {
    deletedButton =
      <img
        src={deleteIcon}
        alt=" Delete Icon"
        style={deleteIconStyles}
        onClick={() => {
          if(props.exerciseCheckboxCheckedList.length !== 0 || props.setCheckboxCheckedList.length !== 0) {
            props.onDeletingChecked();
          } else if (props.workoutCheckboxCheckedList.length !== 0) {
            deleteWorkoutsSubmission();
          }
          props.onClearCheckboxCheckedLists();
        }}
      />;
  }

  let archiveButton = null;
  let finishButton = null;
  if(props.isArchiveAndFinishButtonsVisible) {
    archiveButton =
      <Link to="/exerciseArchives">
        <img
          src={archiveIcon}
          alt="Archive Icon"
          style={archiveIconStyles}
          name="archiveIcon"
          onClick={(event) => {
            props.onSettingArchiveAndFinishButtonsVisiblity(event);
          }}
        />
      </Link>;
    finishButton =
      <img
        src={finishIcon}
        alt="Finish Icon"
        style={finishIconStyles}
        onClick={() => {
          newWorkoutFormSubmission();
        }}
      />;
  }

  return(
    <div style={headerStyles}>
      <style jsx>{`
          img {
            width: 29px;
          }
      `}</style>
      <div style={mainTitleContainerSyles}>
        <h1>W.O.T.</h1>
      </div>
      <div style={navigationBarStyles}>
        <Link to="/">
          <img
            src={homeIcon}
            alt="Home Icon"
            style={homeIconStyles}
            name="homeIcon"
            onClick={(event) => {
              props.onSettingArchiveAndFinishButtonsVisiblity(event);
              if(props.selectedWorkoutToBeEditedId !== null) {
                props.onPopUpModalVisibiltyChange('open');
              }
            }}
          />
        </Link>
        {archiveButton}
        {finishButton}
        {deletedButton}
      </div>
    </div>
  );
}

Header.propTypes = {
  workoutTitleInput: PropTypes.string,
  dateInput: PropTypes.string,
  workoutNotesInput: PropTypes.string,
  masterExerciseList: PropTypes.object,
  onResetForm: PropTypes.func,
  selectedWorkoutToBeEditedId: PropTypes.string,
  onResettingSelectedWorkoutToBeEditedId: PropTypes.func,
  isArchiveAndFinishButtonsVisible: PropTypes.bool,
  onSettingArchiveAndFinishButtonsVisiblity: PropTypes.func,
  dispatch: PropTypes.func,
  exerciseCheckboxCheckedList: PropTypes.array,
  onDeletingChecked: PropTypes.func,
  setCheckboxCheckedList: PropTypes.array,
  workoutCheckboxCheckedList: PropTypes.array,
  onClearCheckboxCheckedLists: PropTypes.func,
  onPopUpModalVisibiltyChange: PropTypes.func
};

export default connect()(Header);
