import React from 'react';
import styled from 'styled-components';

const AppIntro = styled.div`
  font-size: large;
`;

const HomePage = () => (
  <AppIntro>
    <p>
      To get started, edit <code> src / App.js </code> and save to reload.
    </p>
  </AppIntro>
);

export default HomePage;
