import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchives from './ExerciseArchives';
import Footer from './Footer';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workoutTitleInput: '',
      dateInput: '',
      workoutNotesInput: '',
      masterWorkoutList: {
        1: {
          id: 1,
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
          id: 1,
          exerciseName: 'test',
          setList: {
            1: {
              id: 1,
              setNumber: 1,
              weight: '',
              reps: ''
            },
            2: {
              id: 2,
              setNumber: 2,
              weight: '',
              reps: ''
            }
          }
        },
        2: {
          id: 2,
          exerciseName: '',
          setList: {
            1: {
              id: 1,
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
    this.handleAddingNewExercise = this.handleAddingNewExercise.bind(this);
    this.handleAddingNewSet = this.handleAddingNewSet.bind(this);
  }

  handleInputChange(event, inputName, inputId, exerciseId) {
    if(inputName === 'workout') {
      this.setState({
        [event.target.name]: event.target.value
      });
    } else if(inputName === 'exercise') {
      const newExercise = Object.assign({}, this.state.masterExerciseList[inputId], {
        exerciseName: event.target.value
      });
      const newExerciseList = Object.assign({}, this.state.masterExerciseList, {
        [inputId]: newExercise
      });
      this.setState({
        masterExerciseList: newExerciseList
      });
    } else if(inputName === 'weight') {
      const newSet = Object.assign({}, this.state.masterExerciseList[exerciseId].setList[inputId], {
        weight: event.target.value
      });
      const newSetList = Object.assign({}, this.state.masterExerciseList[exerciseId].setList, {
        [inputId]: newSet
      });
      const newExercise = Object.assign({}, this.state.masterExerciseList[exerciseId], {
        setList: newSetList
      });
      const newExerciseList = Object.assign({}, this.state.masterExerciseList, {
        [exerciseId]: newExercise
      });
      this.setState({
        masterExerciseList: newExerciseList
      });
    } else {
      const newSet = Object.assign({}, this.state.masterExerciseList[exerciseId].setList[inputId], {
        reps: event.target.value
      });
      const newSetList = Object.assign({}, this.state.masterExerciseList[exerciseId].setList, {
        [inputId]: newSet
      });
      const newExercise = Object.assign({}, this.state.masterExerciseList[exerciseId], {
        setList: newSetList
      });
      const newExerciseList = Object.assign({}, this.state.masterExerciseList, {
        [exerciseId]: newExercise
      });
      this.setState({
        masterExerciseList: newExerciseList
      });
    }
  };

  handleAddingNewExercise() {
    const newExerciseId = v4();
    const newSetId = v4();
    const newExerciseList = Object.assign({}, this.state.masterExerciseList, {
      [newExerciseId]: {
        id: newExerciseId,
        exerciseName: '',
        setList: {
          [newSetId]: {
            id: newSetId,
            setNumber: 1,
            weight: '',
            reps: ''
          }
        }
      }
    });
    this.setState({
      masterExerciseList: newExerciseList
    });
  };

  handleAddingNewSet(exerciseId) {
    const newSetId = v4();
    const newSetNumber = Object.keys(this.state.masterExerciseList[exerciseId].setList).length + 1;
    const newSetList = Object.assign({}, this.state.masterExerciseList[exerciseId].setList, {
      [newSetId]: {
        id: newSetId,
        setNumber: newSetNumber,
        weight: '',
        reps: ''
      }
    });
    const newExercise = Object.assign({}, this.state.masterExerciseList[exerciseId], {
      setList: newSetList
    });
    const newExerciseList = Object.assign({}, this.state.masterExerciseList, {
      [exerciseId]: newExercise
    })
    this.setState({
      masterExerciseList: newExerciseList
    }, () => {
      console.log(this.state.masterExerciseList);
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
                onInputChange={this.handleInputChange}
                onAddingNewExercise={this.handleAddingNewExercise}
                onAddingNewSet={this.handleAddingNewSet}
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
