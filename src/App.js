import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">

            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/coins/:ids' component={CoinDetails}/>
            </Switch>
        </div>
    );
}

export default App;
