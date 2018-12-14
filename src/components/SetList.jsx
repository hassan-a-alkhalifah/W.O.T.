import React from 'react';
import Set from './Set';
import PropTypes from 'prop-types';

function SetList(props) {
  return(
    <div>
      {Object.keys(props.setList).map((setId) => {
        let set = props.setList[setId];
        return(
          <Set
            key={setId}
            setId={setId}
            setNumber={set.setNumber}
            weight={set.weight}
            reps={set.reps}
            exerciseId={props.exerciseId}
            onInputChange={props.onInputChange}
          />
        );
      })}
    </div>
  );
}

SetList.propTypes = {
  setList: PropTypes.object,
  exerciseId: PropTypes.string,
  onInputChange: PropTypes.func
};

export default SetList;
