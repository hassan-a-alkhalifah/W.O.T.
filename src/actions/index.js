import constants from './../constants';
const { firebaseConfig, c } = constants;
/*eslint-disable */
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const workouts = firebase.database().ref('workouts');
/*eslint-enable */

export function addWorkout(workoutTitle, date, workoutNotes, masterExerciseList) {
  return () => workouts.push({
    workoutTitle: workoutTitle,
    date: date,
    workoutNotes: workoutNotes,
    masterExerciseList: masterExerciseList
  });
}

export function editWorkout(selectedWorkoutToBeEditedId, workoutTitle, date, workoutNotes, masterExerciseList) {
  return function(dispatch) {
    return workouts.child(selectedWorkoutToBeEditedId).update({
      workoutTitle: workoutTitle,
      date: date,
      workoutNotes: workoutNotes,
      masterExerciseList: masterExerciseList
    });
  };
}

export function watchFirebaseWorkoutRef() {
  return function(dispatch) {
    workouts.on('child_added', data => {
      const newWorkout = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveWorkout(newWorkout));
    });
  };
}

export function watchFirebaseEditWorkoutRef() {
  return function(dispatch) {
    workouts.on('child_changed', data => {
      const newWorkout = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveWorkout(newWorkout));
    });
  };
}

function receiveWorkout(workoutFromFirebase) {
  return {
    type: c.RECEIVE_WORKOUT,
    workout: workoutFromFirebase
  };
}
