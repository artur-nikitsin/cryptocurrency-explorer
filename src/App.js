import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <div className="App">
            <coingecko-coin-compare-chart-widget coin-ids="bitcoin" currency="usd"
                                                 locale="en"/>
            <MainPage/>
        </div>
    );
}

export default App;
