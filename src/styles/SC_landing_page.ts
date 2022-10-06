import { animated } from '@react-spring/web';
import styled from 'styled-components';

const LandingPageContent = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled(animated.article)`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  font-size: 2.3rem;
  height: 6rem;
  width: 100%;
  top: calc(50% - 5rem);
  font-weight: 800;
  color: rgb(255, 117, 24);

  @media (min-width: 820px) {
    font-size: 5rem;
  }
`;

export { LandingPageContent, Content };
