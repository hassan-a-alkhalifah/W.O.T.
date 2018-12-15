import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/setStyles.css';

function Set(props) {
  const setContainerStyles = {
    display: 'flex',
    alignItems: 'center'
  };
  const setContainerSpacerStyles = {
    width: '31px',
    height: '13px'
  };

  let _weight = '';
  let _reps = '';
  let ifNotFirstSetCheckboxNeeded = null;
  let ifNotFirstSetSpacerNeeded = null;

  if(props.setNumber !== 1) {
    ifNotFirstSetCheckboxNeeded =
      <label className="setCheckBoxContainer">
        <input type="checkbox"/>
        <span></span>
      </label>;
  }
  if(Object.keys(props.setList).length !== 1) {
    ifNotFirstSetSpacerNeeded =
      <div style={setContainerSpacerStyles}></div>;
  }

  return(
    <div style={setContainerStyles}>
      {ifNotFirstSetSpacerNeeded}
      <div className="setInputContainer">
        <div>
          <p>{props.setNumber}</p>
        </div>
        <input
          className="weightInput"
          type="number"
          onChange={(event) => {props.onInputChange(event, 'weight', props.setId, props.exerciseId);}}
          value={props.weight}
          ref={(input) => {_weight = input;}}
        />
        <input
          className="repInput"
          type="number"
          onChange={(event) => {props.onInputChange(event, 'reps', props.setId, props.exerciseId);}}
          value={props.reps}
          ref={(input) => {_reps = input;}}
        />
      </div>
      {ifNotFirstSetCheckboxNeeded}
    </div>
  );
}

Set.propTypes = {
  setId: PropTypes.string,
  setNumber: PropTypes.number,
  weight: PropTypes.string,
  reps: PropTypes.string,
  exerciseId: PropTypes.string,
  onInputChange: PropTypes.func,
  setList: PropTypes.object
};

export default Set;
