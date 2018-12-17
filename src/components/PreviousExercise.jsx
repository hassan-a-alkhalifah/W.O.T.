import React from 'react';
import PropTypes from 'prop-types';

function PreviousExercise({ workoutTitle, date }) {

  const previousExerciseStyles = {
    display: 'flex',
    fontSize: '20px',
    marginBottom: '10px'
  };
  const workoutSpacerStyles = {
    width: '31px',
    height: '13px'
  };

  return(
    <div style={previousExerciseStyles}>
      <style jsx>{`
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
      <p>{date}</p>
      <p>{workoutTitle}</p>
      <label>
        <input type="checkbox"/>
        <span></span>
      </label>
    </div>
  );
}

PreviousExercise.propTypes = {
  workoutTitle: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string
}

export default PreviousExercise;
