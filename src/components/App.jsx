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
      workoutTitleInput: '',
      dateInput: '',
      workoutNotesInput: '',
      exerciseListInputs: [],
      setListInputs: [],
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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state.workoutTitleInput);
    });
  };

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
                workoutTitleInput={this.state.workoutTitleInput}
                dateInput={this.state.dateInput}
                workoutNotesInput={this.state.workoutNotesInput}
                exerciseListInputs={this.state.exerciseListInputs}
                setListInputs={this.state.setListInputs}
                onInputChange={this.handleInputChange}
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
