import React from 'react';
import styled from 'styled-components';
import { NavigationBar, NavigationLink } from '../styles/SC_navigation';

const Navigation = () => {
  return (
    <NavigationBar>
      <ResizedLogo src="/icons/logo.jpg" alt="Marta Canert Design" />
      <div>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </div>
    </NavigationBar>
  );
};

export default Navigation;

const ResizedLogo = styled.img`
  height: 3rem;
  @media (max-width: 500px) {
    display: none;
  }
`;
