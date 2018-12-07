import React from 'react';
import SetList from './SetList';
import addSetIcon from '../assets/images/add-set-icon.png';

function Exercise() {
  const exerciseStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const exerciseInputStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const exerciseInputSpacerStyles = {
    width: '31px',
    height: '13px'
  }
  const addSetIconContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const addSetIconSpacerStyles = {
    width: '230px',
    height: '34px'
  }
  const addSetIconStyles = {
    width: '12px',
    height: '12px'
  }

  return(
    <div style={exerciseStyles}>
      <style jsx>{`
          input[type=text] {
            width: 185px;
            height: 34px;
            border: 1px solid #3498DB;
          }
          input[type=text]::placeholder {
            color: #C7C5C5;
            font-size: 14px;
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
        <input type="text" placeholder="Enter Exercise Name"/>
        <label>
          <input type="checkbox" name="checkbox-02" />
          <span></span>
        </label>
      </div>
      <SetList></SetList>
      <div style={addSetIconContainerStyles}>
        <div style={addSetIconSpacerStyles}></div>
        <img src={addSetIcon} alt="Add Set Icon" style={addSetIconStyles}/>
      </div>
    </div>
  );
}

export default Exercise;
