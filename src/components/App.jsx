import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchives from './ExerciseArchives';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      masterWorkoutList: {
        1: {
          id: null,
          workoutTitle: '',
          date: '',
          workoutNote: '',
          exerciseList: [
            1
          ]
        }
      },
      masterExerciseList: {
        1: {
          id: null,
          exerciseName: '',
          setList: {
            1: {
              id: null,
              setNumber: 1,
              weight: '',
              reps: ''
            },
            2: {
              id: null,
              setNumber: 2,
              weight: '',
              reps: ''
            }
          }
        },
        2: {
          id: null,
          exerciseName: '',
          setList: {
            1: {
              id: null,
              setNumber: 1,
              weight: '',
              reps: ''
            }
          }
        }
      },
      selectedWorkoutId: 1
    };
  }
  render() {
    return(
      <div>
        <Header></Header>
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <Workout
                masterWorkoutList={this.state.masterWorkoutList}
                masterExerciseList={this.state.masterExerciseList}
                selectedWorkoutId={this.state.selectedWorkoutId}
              />
            }
          />
          <Route
            exact path='/exerciseArchives'
            render={()=>
              <ExerciseArchives />
            }
          />
          <Route component={Error404}/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
