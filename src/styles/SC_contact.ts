import { animated } from '@react-spring/web';
import styled from 'styled-components';

const ContactMainWrawrapper = styled(animated.article)`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.section`
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(40% - 5rem);
  @media (min-width: 820px) {
  }
`;

const SocialIconsWrapper = styled.div`
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 1.5rem;
  justify-content: space-around;
  @media (min-width: 820px) {
    width: 35rem;
  }
`;

const SocialIcon = styled(animated.span)`
  display: inline-block;
  width: 40px;
  height: 40px;
  &.instagram {
    background-image: url(/icons/instagram.svg);
  }

  &.facebook {
    background-image: url(/icons/facebook.svg);
  }

  &.linkedIn {
    background-image: url(/icons/linkedin.svg);
  }

  &.behance {
    background-image: url(/icons/behance.svg);
  }

  :hover {
    filter: invert(50%) sepia(36%) saturate(2237%) hue-rotate(349deg)
      brightness(101%) contrast(101%);
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  @media (min-width: 820px) {
    font-size: 2.7rem;
  }
`;
const H3 = styled.h3`
  @media (min-width: 820px) {
    font-size: 1.5rem;
  }
`;

export {
  ContactMainWrawrapper,
  ContactInfo,
  SocialIconsWrapper,
  SocialIcon,
  H1,
  H3
};
