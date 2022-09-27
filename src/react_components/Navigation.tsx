import React from 'react';
import { NavigationBar, NavigationLink } from '../styles/SC_navigation';

const Navigation = () => {
  return (
    <NavigationBar>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/portfolio">Portfolio</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </NavigationBar>
  );
};

export default Navigation;
