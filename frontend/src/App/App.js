import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home';
import Chat from '../components/Chat';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path={'/'} exact component={Chat} />
        <Route path={'/hello'} exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
