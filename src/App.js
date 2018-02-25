import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const Main = () => (
  <p className="App-intro">
    To get started, edit <code> src / App.js </code> and save to reload.
  </p>
);

const Feature = () => <div>Feature</div>;

const App = () => (
  <AppWrapper className="App">
    <Helmet titleTemplate="%s - React-O-Matic" defaultTitle="React-O-Matic">
      <meta
        name="description"
        content="Sensible extensions to create-react-app"
      />
    </Helmet>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/feature" component={Feature} />
    </Switch>
  </AppWrapper>
);

export default App;
