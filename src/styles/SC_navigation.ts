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
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  @media (min-width: 500px) {
    font-size: 2.5rem;
  }

  @media (min-width: 821px) {
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

const ResizedLogo = styled.img`
  height: 3rem;
  margin-left: 10rem;
  margin-top: 0.5rem;
  @media (max-width: 820px) {
    display: none;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 820px) {
    justify-content: center;
  }
`;

export { NavigationBar, NavigationLink, ResizedLogo, LinksWrapper };
