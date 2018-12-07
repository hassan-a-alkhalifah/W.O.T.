import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Workout from './Workout';
import ExerciseArchives from './ExerciseArchives';
import Footer from './Footer';

function App() {
  return(
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' render={()=><Workout />} />
        <Route exact path='/exerciseArchives' render={()=><ExerciseArchives />} />
        <Route component={Error404}/>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
