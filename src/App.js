import React from 'react';
import MainTable from './components/MainPage/MainPage';
import CoinDetails from './components/CoinDetails/CoinDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={MainTable} />
        <Route path='/coins/:ids' component={CoinDetails} />
      </Switch>
    </div>
  );
}

export default App;
