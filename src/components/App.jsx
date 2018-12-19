import React from 'react';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchives from './ExerciseArchives';
import Footer from './Footer';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import * as actions from './../actions';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.initialExerciseId = v4();
    this.initialSetId = v4();
    this.state = {
      workoutTitleInput: '',
      dateInput: '',
      workoutNotesInput: '',
      masterExerciseList: {
        [this.initialExerciseId]: {
          exerciseName: '',
          setList: {
            [this.initialSetId]: {
              setNumber: 1,
              weight: '',
              reps: ''
            }
          }
        }
      },
      selectedWorkoutToBeEditedId: null,
      isArchiveAndFinishButtonsVisible: true,
      isTextAreaVisible: false,
      exerciseCheckboxCheckedList: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddingNewExercise = this.handleAddingNewExercise.bind(this);
    this.handleAddingNewSet = this.handleAddingNewSet.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
    this.handleAutofillingEditForm = this.handleAutofillingEditForm.bind(this);
    this.handleResettingSelectedWorkoutToBeEditedId = this.handleResettingSelectedWorkoutToBeEditedId.bind(this);
    this.handleSettingArchiveAndFinishButtonsVisiblity = this.handleSettingArchiveAndFinishButtonsVisiblity.bind(this);
    this.handleSettingTextAreaVisiblity = this.handleSettingTextAreaVisiblity.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseWorkoutRef, watchFirebaseEditWorkoutRef } = actions;
    dispatch(watchFirebaseWorkoutRef());
    dispatch(watchFirebaseEditWorkoutRef());
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
    } else if(inputName === 'exerciseCheckbox') {
      if(event.target.checked === true) {
        let newExerciseCheckboxCheckedList = this.state.exerciseCheckboxCheckedList.slice();
        newExerciseCheckboxCheckedList.push(inputId);
        this.setState({
          exerciseCheckboxCheckedList: newExerciseCheckboxCheckedList
        });
      } else {
        let newExerciseCheckboxCheckedList = [];
        this.state.exerciseCheckboxCheckedList.map((exerciseCheckedId) => {
          if(exerciseCheckedId !== inputId) {
            newExerciseCheckboxCheckedList.push(inputId);
          }
        });
        this.setState({
          exerciseCheckboxCheckedList: newExerciseCheckboxCheckedList
        });
      }
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
  }

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
  }

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
    });
    this.setState({
      masterExerciseList: newExerciseList
    });
  }

  handleResetForm() {
    const newExerciseId = v4();
    const newSetId = v4();
    this.setState({
      workoutTitleInput: '',
      dateInput: '',
      workoutNotesInput: '',
      masterExerciseList: {
        [newExerciseId]: {
          exerciseName: '',
          setList: {
            [newSetId]: {
              setNumber: 1,
              weight: '',
              reps: ''
            }
          }
        }
      },
      isTextAreaVisible: false
    });
  }

  handleAutofillingEditForm(selectedWorkoutId) {
    const selectedWorkout = Object.assign({}, this.props.masterWorkoutList[selectedWorkoutId]);
    this.setState({
      workoutTitleInput: selectedWorkout.workoutTitle,
      dateInput: selectedWorkout.date,
      workoutNotesInput: selectedWorkout.workoutNotes,
      masterExerciseList: selectedWorkout.masterExerciseList,
      selectedWorkoutToBeEditedId: selectedWorkoutId
    });
  }

  handleResettingSelectedWorkoutToBeEditedId() {
    this.setState({
      selectedWorkoutToBeEditedId: null
    });
  }

  handleSettingArchiveAndFinishButtonsVisiblity(event) {
    if(event.target.name === 'archiveIcon') {
      this.setState({
        isArchiveAndFinishButtonsVisible: false
      });
    } else if(event.target.name !== 'archiveIcon' && this.state.isArchiveAndFinishButtonsVisible === false) {
      this.setState({
        isArchiveAndFinishButtonsVisible: true
      });
    }
  }

  handleSettingTextAreaVisiblity() {
    this.setState({
      isTextAreaVisible: this.state.isTextAreaVisible ? false : true
    });
  }

  render() {
    return(
      <div>
        <Header
          workoutTitleInput={this.state.workoutTitleInput}
          dateInput={this.state.dateInput}
          workoutNotesInput={this.state.workoutNotesInput}
          masterExerciseList={this.state.masterExerciseList}
          onResetForm={this.handleResetForm}
          selectedWorkoutToBeEditedId={this.state.selectedWorkoutToBeEditedId}
          onResettingSelectedWorkoutToBeEditedId={this.handleResettingSelectedWorkoutToBeEditedId}
          isArchiveAndFinishButtonsVisible={this.state.isArchiveAndFinishButtonsVisible}
          onSettingArchiveAndFinishButtonsVisiblity={this.handleSettingArchiveAndFinishButtonsVisiblity}
          exerciseCheckboxCheckedList={this.state.exerciseCheckboxCheckedList}
        />
        <Switch>
          <Route
            exact path='/'
            render={()=>
              <Workout
                masterExerciseList={this.state.masterExerciseList}
                workoutTitleInput={this.state.workoutTitleInput}
                dateInput={this.state.dateInput}
                workoutNotesInput={this.state.workoutNotesInput}
                onInputChange={this.handleInputChange}
                onAddingNewExercise={this.handleAddingNewExercise}
                onAddingNewSet={this.handleAddingNewSet}
                isTextAreaVisible={this.state.isTextAreaVisible}
                onSettingTextAreaVisiblity={this.handleSettingTextAreaVisiblity}
              />
            }
          />
          <Route
            exact path='/exerciseArchives'
            render={()=>
              <ExerciseArchives
                masterWorkoutList={this.props.masterWorkoutList}
                onAutoFillingEditForm={this.handleAutofillingEditForm}
                onSettingArchiveAndFinishButtonsVisiblity={this.handleSettingArchiveAndFinishButtonsVisiblity}
              />
            }
          />
          <Route component={Error404}/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

App.propTypes = {
  masterWorkoutList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterWorkoutList: state.masterWorkoutList
  };
};

export default withRouter(connect(mapStateToProps)(App));
