import React from 'react';
import styled, {keyframes} from 'styled-components';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import logo from './logo.svg';

const HeaderWrapper = styled.header`
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <HeaderWrapper>
    <RotatingLogo src={logo} alt="logo" />
    <H1>Welcome to React</H1>
    <NavBar>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/repos">Repos</HeaderLink>
    </NavBar>
  </HeaderWrapper>
);

export default Header;
