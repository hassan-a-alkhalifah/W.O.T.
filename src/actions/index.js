import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const workouts = firebase.database().ref('workouts');

export function addWorkout(workoutTitle, date, workoutNotes, masterExerciseList) {
  return () => workouts.push({
    workoutTitle: workoutTitle,
    date: date,
    workoutNotes: workoutNotes,
    masterExerciseList: masterExerciseList
  });
}
