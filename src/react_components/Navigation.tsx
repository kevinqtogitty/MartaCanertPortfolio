import React from 'react';
import styled from 'styled-components';
import {
  LinksWrapper,
  NavigationBar,
  NavigationLink,
  ResizedLogo
} from '../styles/SC_navigation';

const Navigation = () => {
  return (
    <NavigationBar>
      <ResizedLogo src="/icons/logo.jpg" alt="Marta Canert Design" />
      <LinksWrapper>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </LinksWrapper>
    </NavigationBar>
  );
};

export default Navigation;
