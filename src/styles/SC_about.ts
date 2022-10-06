import { animated } from '@react-spring/web';
import styled from 'styled-components';

const MainAboutMeWrapper = styled(animated.article)`
  width: 100vw;
  height: 100%;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding-top: 5rem;

  @media (min-width: 820px) {
    flex-direction: row-reverse;
    justify-content: center;
    column-gap: 3rem;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: fit-content;
  row-gap: 2rem;
  margin-top: 9rem;
  column-gap: 3rem;
  @media (max-width: 820px) {
    flex-direction: column;
    margin-bottom: 5rem;
    margin-top: 0rem;
  }
`;

const AboutWrapper = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  @media (min-width: 820px) {
    align-items: flex-start;
    width: fit-content;
    row-gap: 4rem;
    padding: 0rem 1rem 0rem 1rem;
    row-gap: 1rem;
  }
`;

const HeadersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  width: fit-content;
  border-radius: 5px;
  @media (min-width: 820px) {
    box-shadow: none;
    padding: 0px;
    align-items: flex-start;
  }
`;

const AboutInfo = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 820px) {
    text-align: left;
    width: fit-content;
    border-radius: 5px;
    /* box-shadow: none; */
  }
`;

const UL = styled.ul`
  @media (min-width: 820px) {
    margin-left: -1rem;
  }
`;
const LI = styled.li`
  list-style-type: none;
  margin-top: 0.8rem;
  font-weight: 550;

  @media (min-width: 820px) {
    margin-top: 0rem;
  }
`;

const Photo = styled.img`
  height: 20rem;
  align-self: center;
  border-radius: 2px;
  width: auto;

  @media (min-width: 820px) {
    height: 50vh;
  }
`;

const H2 = styled.h2`
  &.mobile {
    display: block;
    @media (min-width: 820px) {
      font-size: 3rem;
      display: none;
    }
  }

  &.desktop {
    display: none;
    @media (min-width: 820px) {
      font-size: 3rem;
      display: block;
    }
  }
`;
const H3 = styled.h3`
  font-weight: 400;
  &.name {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export {
  Photo,
  MainAboutMeWrapper,
  AboutWrapper,
  HeadersWrapper,
  AboutInfo,
  UL,
  LI,
  H2,
  H3,
  MobileWrapper
};
