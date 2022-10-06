import { animated } from '@react-spring/web';
import styled from 'styled-components';

const PortfolioMainWrapper = styled(animated.article)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    height: 100%;
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`;

const PhotoContainer = styled.div`
  max-width: 11rem;
  max-height: 15.4rem;
  overflow: hidden;
  &.mobile {
    height: 15.2rem;
  }
`;

interface PhotoProps {
  height?: string;
  width?: string;
}

const Photo = styled.img<PhotoProps>`
  height: ${(props) => props.height || '30vh'};
  overflow: hidden;
  cursor: pointer;
`;

const FlexboxWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
`;

const FlexRow1 = styled.div`
  display: flex;
  height: 15rem;
  @media (max-width: 820px) {
    display: none;
  }
`;
const FlexRow2 = styled(FlexRow1)``;

const MobileFlexDisplay = styled.section`
  display: none;
  @media (max-width: 820px) {
    width: fit-content;
    margin-top: 1rem;
    /* position: absolute;
    top: 6rem; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 0rem;
    margin-bottom: 4rem;
  }
`;

export {
  PortfolioMainWrapper,
  Photo,
  PhotoContainer,
  FlexRow1,
  FlexRow2,
  MobileFlexDisplay,
  FlexboxWrapper
};
