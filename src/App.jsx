import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Content from './components/Content/Content.jsx';

const App = () => {
  return (
    <Switch>
      <Route path='/people/:personId?' render={() => <Content />} />
      <Route path='/planets/:planetId?' render={() => <Content />} />
      <Route path='/starships/:starshipId?' render={() => <Content />} />
      <Route path='/vehicles/:vehicleId?' render={() => <Content />} />
      <Route path='/films/:filmId?' render={() => <Content />} />
      <Route path='/' render={() => <Redirect to='/people' />} />
      <Route path='*' render={() => <Redirect to='/people' />} />
    </Switch>
  );
};

export default App;
