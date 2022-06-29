import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCardsComponent from './components/ListCardsComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateCardComponent from './components/CreateCardComponent';

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListCardsComponent}></Route>
              <Route path = "/cards" component = {ListCardsComponent}></Route>
              <Route path = "/add-card/:id" component = {CreateCardComponent}></Route>
            </Switch>
          </div>
        </Router>
      </div>

  );
}

export default App;
