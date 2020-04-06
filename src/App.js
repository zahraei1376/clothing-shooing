import React from 'react';
import './App.scss';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage.component';
import ShopData from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopData}/>
      </Switch>
    </div>
  );
}

export default App;
