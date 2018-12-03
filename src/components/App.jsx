import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Workout from './Workout';
import ExerciseArchives from './ExerciseArchives';

function App() {
  return(
    <div>
      <h1>App</h1>
      <Switch>
        <Route exact path='/' render={()=><Workout />} />
        <Route exact path='/exerciseArchives' render={()=><ExerciseArchives />} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
