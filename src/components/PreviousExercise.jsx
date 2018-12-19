import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PreviousExercise({ workoutTitle, date, onAutoFillingEditForm, id, onSettingArchiveAndFinishButtonsVisiblity, onInputChange }) {

  const previousExerciseStyles = {
    display: 'flex',
    fontSize: '20px',
    marginBottom: '10px'
  };
  const workoutSpacerStyles = {
    width: '31px',
    height: '13px'
  };
  const dateWorkoutTitleContainerStyles = {
    display: 'flex'
  };
  const dateStyles = {
    marginRight: '8px'
  };

  return(
    <div style={previousExerciseStyles}>
      <style jsx>{`
        p {
          color: #000;
        }
        input[type="checkbox"] + span,
        input[type="checkbox"] + span::before
        {
            display: inline-block;
            vertical-align: middle;
        }
        label
        {
            cursor: pointer;
            margin-left: 12px;
        }
        input[type="checkbox"]
        {
            opacity: 0;
            position: absolute;
        }
        input[type="checkbox"] + span::before
        {
            content: "";
            width: 13px;
            height: 13px;
            margin: 0 4px 0 0;
            border: solid 1px #000;
            line-height: 14px;
            text-align: center;
            color: #000;
            font-size: 12px;
            font-weight: 900;
        }
        input[type="checkbox"]:checked + span::before
        {
            content: "X";
        }
      `}</style>
      <div style={workoutSpacerStyles}></div>
      <Link to="/">
        <div
          style={dateWorkoutTitleContainerStyles}
          name="workoutDateAndTime"
          onClick={(event) => {
            onAutoFillingEditForm(id);
            onSettingArchiveAndFinishButtonsVisiblity(event);
          }}
        >
          <p style={dateStyles}>{date}</p>
          <p>{workoutTitle}</p>
        </div>
      </Link>
      <label>
        <input
          type="checkbox"
          name="workoutCheckboxCheckedList"
          onChange={(event) => {onInputChange(event, 'workoutCheckbox', id);}}
        />
        <span></span>
      </label>
    </div>
  );
}

PreviousExercise.propTypes = {
  workoutTitle: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  onAutoFillingEditForm: PropTypes.func,
  onSettingArchiveAndFinishButtonsVisiblity: PropTypes.func,
  onInputChange: PropTypes.func
};

export default PreviousExercise;
