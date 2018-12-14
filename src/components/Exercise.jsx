import React from 'react';
import SetList from './SetList';
import addSetIcon from '../assets/images/add-set-icon.png';
import PropTypes from 'prop-types';

function Exercise(props) {
  const exerciseStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const exerciseInputStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const exerciseInputSpacerStyles = {
    width: '31px',
    height: '13px'
  };
  const addSetIconContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const addSetIconSpacerStyles = {
    width: '238px',
    height: '34px'
  };
  const addSetIconStyles = {
    width: '12px',
    height: '12px'
  };

  let _exerciseName = '';

  return(
    <div style={exerciseStyles}>
      <style jsx>{`
          input[type=text] {
            width: 185px;
            height: 34px;
            border: 1px solid #3498DB;
            padding-left: 13px;
          }
          input[type=text]::placeholder {
            color: #C7C5C5;
            font-size: 14px;
          }
          #exerciseLabelsContainer {
            width: 198px;
            height: 34px;
            border: 1px solid #3498DB;
            margin-top: -1px;
            display: flex;
            justify-content: center;
          }
          #exerciseLabelsContainer div {
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 14px;
            font-weight: 400;
          }
          #exerciseLabelsContainer div p {
            font-weight: 400;
          }
          #exerciseLabelsContainer div:nth-child(1) {
            width: 58px;
          }
          #exerciseLabelsContainer div:nth-child(2) {
            width: 80px;
            border-left: 1px solid #3498DB;
            border-right: 1px solid #3498DB;
          }
          #exerciseLabelsContainer div:nth-child(3) {
            width: 58px;
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
      <div style={exerciseInputStyles}>
        <div style={exerciseInputSpacerStyles}></div>
        <input
          type="text"
          placeholder="Enter Exercise Name"
          onChange={(event) => {props.onInputChange(event, 'exercise', props.exerciseId);}}
          value={props.exerciseName}
          ref={(input) => {_exerciseName = input;}}
        />
        <label>
          <input type="checkbox"/>
          <span></span>
        </label>
      </div>
      <div id="exerciseLabelsContainer">
        <div>
          <p>Sets</p>
        </div>
        <div>
          <p>Weight</p>
        </div>
        <div>
          <p>Reps</p>
        </div>
      </div>
      <SetList
        setList={props.setList}
        exerciseId={props.exerciseId}
        onInputChange={props.onInputChange}
      />
      <div style={addSetIconContainerStyles}>
        <div style={addSetIconSpacerStyles}></div>
        <img src={addSetIcon} alt="Add Set Icon" style={addSetIconStyles}/>
      </div>
    </div>
  );
}

Exercise.propTypes = {
  exerciseId: PropTypes.string,
  exerciseName: PropTypes.string,
  setList: PropTypes.object,
  onInputChange: PropTypes.func
};

export default Exercise;
