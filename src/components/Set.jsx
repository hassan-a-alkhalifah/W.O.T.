import React from 'react';

function Set() {
  const setContainerStyles = {
    display: 'flex',
    alignItems: 'center'
  }
  const setContainerSpacerStyles = {
    width: '31px',
    height: '13px'
  }

  return(
    <div style={setContainerStyles}>
      <style jsx>{`
        .setInputContainer {
          width: 198px;
          height: 34px;
          border: 1px solid #3498DB;
          margin-top: -1px;
          display: flex;
          justify-content: center;
        }
        .setInputContainer div {
          width: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .setInputContainer input {
          padding-left: 13px;
        }
        .setInputContainer input:nth-child(2) {
          width: 67px;
          border-top: none;
          border-right: 1px solid #3498DB;
          border-bottom: none;
          border-left: 1px solid #3498DB;
        }
        .setInputContainer input:nth-child(3) {
          width: 45px;
          border: none;
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
    <div style={setContainerSpacerStyles}></div>
      <div className="setInputContainer">
        <div>
          <p>1</p>
        </div>
        <input/>
        <input/>
      </div>
      <label>
        <input type="checkbox"/>
        <span></span>
      </label>
    </div>
  );
}

export default Set;
