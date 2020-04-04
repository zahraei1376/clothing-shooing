import React from 'react';
import './App.scss';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage.component';

const HatsPage=(props)=>{
  console.log(props)
  return(
    <div>
      <button onClick={()=>{props.history.push('/')}}>go back</button>
      <h1>HATS id is :{props.match.params.id}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
