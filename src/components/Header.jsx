import React from 'react';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';
import { addWorkout, editWorkout } from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
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

  let deletedButton = null
  if(props.isDeleteButtonVisible) {
    deletedButton =
    <img src={deleteIcon} alt=" Delete Icon" style={deleteIconStyles}/>;
  }

  return(
    <div>
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
          <img src={homeIcon} alt="Home Icon" style={homeIconStyles}/>
        </Link>
        <Link to="/exerciseArchives">
          <img src={archiveIcon} alt="Archive Icon" style={archiveIconStyles}/>
        </Link>
        <img
          src={finishIcon}
          alt="Finish Icon"
          style={finishIconStyles}
          onClick={() => {
            newWorkoutFormSubmission();
          }}
        />
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
  isDeleteButtonVisible: PropTypes.bool
};

export default connect()(Header);
