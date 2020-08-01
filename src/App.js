import React from 'react';
import './App.css';
import LoginPage from './login-page';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Profile from './profie';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;