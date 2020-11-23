import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import CoinDetails from './components/CoinDetails/CoinDetails';
import WidgetConnect from './WidgetConnect/WidgetConnect';

function App() {
  useEffect(() => {
    document.title = 'Coin explorer';
    WidgetConnect();
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='pagesContainer'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/coins/:ids' component={CoinDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
