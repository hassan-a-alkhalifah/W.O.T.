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
      workoutCheckboxCheckedList: [],
      exerciseCheckboxCheckedList: [],
      setCheckboxCheckedList: [],
      popUpModalVisible: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddingNewExercise = this.handleAddingNewExercise.bind(this);
    this.handleAddingNewSet = this.handleAddingNewSet.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
    this.handleAutofillingEditForm = this.handleAutofillingEditForm.bind(this);
    this.handleResettingSelectedWorkoutToBeEditedId = this.handleResettingSelectedWorkoutToBeEditedId.bind(this);
    this.handleSettingArchiveAndFinishButtonsVisiblity = this.handleSettingArchiveAndFinishButtonsVisiblity.bind(this);
    this.handleSettingTextAreaVisiblity = this.handleSettingTextAreaVisiblity.bind(this);
    this.handleDeletingChecked = this.handleDeletingChecked.bind(this);
    this.handleClearCheckboxCheckedLists = this.handleClearCheckboxCheckedLists.bind(this);
    this.handlePopUpModalVisibiltyChange = this.handlePopUpModalVisibiltyChange.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseWorkoutRef, watchFirebaseEditWorkoutRef, watchFirebaseDeleteWorkoutRef } = actions;
    dispatch(watchFirebaseWorkoutRef());
    dispatch(watchFirebaseEditWorkoutRef());
    dispatch(watchFirebaseDeleteWorkoutRef());
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
    } else if(inputName === 'workoutCheckbox') {
      if(event.target.checked === true) {
        let newWorkoutCheckboxCheckedList = this.state.workoutCheckboxCheckedList.slice();
        newWorkoutCheckboxCheckedList.push(inputId);
        this.setState({
          workoutCheckboxCheckedList: newWorkoutCheckboxCheckedList
        });
      } else {
        let newWorkoutCheckboxCheckedList = [];
        this.state.workoutCheckboxCheckedList.map((workoutCheckedId) => {
          if(workoutCheckedId !== inputId) {
            newWorkoutCheckboxCheckedList.push(workoutCheckedId);
          }
        });
        this.setState({
          workoutCheckboxCheckedList: newWorkoutCheckboxCheckedList
        });
      }
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
            newExerciseCheckboxCheckedList.push(exerciseCheckedId);
          }
        });
        this.setState({
          exerciseCheckboxCheckedList: newExerciseCheckboxCheckedList
        });
      }
    } else if(inputName === 'setCheckbox') {
      if(event.target.checked === true) {
        let newSetCheckboxCheckedList = this.state.setCheckboxCheckedList.slice();
        newSetCheckboxCheckedList.push(inputId);
        this.setState({
          setCheckboxCheckedList: newSetCheckboxCheckedList
        });
      } else {
        let newSetCheckboxCheckedList = [];
        this.state.setCheckboxCheckedList.map((setCheckedId) => {
          if(setCheckedId !== inputId) {
            newSetCheckboxCheckedList.push(setCheckedId);
          }
        });
        this.setState({
          setCheckboxCheckedList: newSetCheckboxCheckedList
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

  handleDeletingChecked() {
    let newMasterExerciseList = Object.assign({}, this.state.masterExerciseList);
    if(this.state.exerciseCheckboxCheckedList.length !== 0) {
      Object.keys(newMasterExerciseList).map((exerciseId) => {
        this.state.exerciseCheckboxCheckedList.map((exerciseToDeletedId) => {
          if(exerciseId === exerciseToDeletedId) {
            delete newMasterExerciseList[exerciseToDeletedId];
            return;
          }
        });
      });
    }
    if(this.state.setCheckboxCheckedList.length !== 0) {
      Object.keys(newMasterExerciseList).map((exerciseId) => {
        Object.keys(newMasterExerciseList[exerciseId].setList).map((setId) => {
          this.state.setCheckboxCheckedList.map((setToBeDeletedId) => {
            if(setId === setToBeDeletedId) {
              delete newMasterExerciseList[exerciseId].setList[setToBeDeletedId];
              return;
            }
          });
        });
      });
    }
    this.setState({
      masterExerciseList: newMasterExerciseList,
      exerciseCheckboxCheckedList: []
    });
  }

  handleClearCheckboxCheckedLists() {
    this.setState({
      workoutCheckboxCheckedList: [],
      exerciseCheckboxCheckedList: [],
      setCheckboxCheckedList: []
    });
  }
  handlePopUpModalVisibiltyChange(choice) {
    if(choice === 'open') {
      this.setState({
        popUpModalVisible: true
      });
    } else {
      this.setState({
        popUpModalVisible: false
      });
    }
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
          onDeletingChecked={this.handleDeletingChecked}
          setCheckboxCheckedList={this.state.setCheckboxCheckedList}
          workoutCheckboxCheckedList={this.state.workoutCheckboxCheckedList}
          onClearCheckboxCheckedLists={this.handleClearCheckboxCheckedLists}
          onPopUpModalVisibiltyChange={this.handlePopUpModalVisibiltyChange}
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
                onResetForm={this.handleResetForm}
                onPopUpModalVisibiltyChange={this.handlePopUpModalVisibiltyChange}
                popUpModalVisible={this.state.popUpModalVisible}
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
                onInputChange={this.handleInputChange}
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
