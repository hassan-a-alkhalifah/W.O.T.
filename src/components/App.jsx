import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StartNewWorkout from './StartNewWorkout';
import ExerciseArchives from './ExerciseArchives';

function App() {
  return(
    <div>
      <h1>App</h1>
      <Switch>
        <Route exact path='/' render={()=><HomePage />} />
        <Route exact path='/startNewWorkout' render={()=><StartNewWorkout />} />
        <Route exact path='/exerciseArchives' render={()=><ExerciseArchives />} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
