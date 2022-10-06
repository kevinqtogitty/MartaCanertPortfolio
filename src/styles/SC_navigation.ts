import { animated } from '@react-spring/web';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.nav`
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0.8rem;
  position: fixed;
  width: 100vw;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  @media (min-width: 820px) {
    padding-right: calc(100vw - 85%);
    justify-content: space-between;
    font-size: 2.5rem;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  transition: color 0.2s ease-in-out;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &.active {
    color: rgb(255, 117, 24);
  }

  &:hover {
    color: rgb(255, 117, 24);
  }
`;

export { NavigationBar, NavigationLink };
