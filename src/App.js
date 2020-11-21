import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.scss';

import MainPage from './components/MainPage/MainPage';
import CoinDetails from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/coins/:ids' component={CoinDetails} />
      </Switch>
    </div>
  );
}

export default App;
