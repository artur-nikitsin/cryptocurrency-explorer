import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import MainPageHooks from './components/MainPage/MainPageHooks';
import CoinDetailsHooks from './components/CoinDetails/CoinDetailsHooks';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={MainPageHooks} />
        <Route path='/coins/:ids' component={CoinDetailsHooks} />
      </Switch>
    </div>
  );
}

export default App;
