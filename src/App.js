import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import HomePage from 'containers/HomePage';
import RepoView from 'containers/RepoView';
import Header from 'components/Header';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  text-align: center;
`;

const App = () => (
  <AppWrapper>
    <Helmet titleTemplate="%s - React-O-Matic" defaultTitle="React-O-Matic">
      <meta
        name="description"
        content="pretty much create-react-app but with some batteries"
      />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/repos" component={RepoView} />
    </Switch>
  </AppWrapper>
);

export default App;
