import styled from 'styled-components';

const PortfolioMainWrapper = styled.article`
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

const FlexRow1 = styled.div`
  display: flex;
  height: fit-content;
  @media (max-width: 820px) {
    display: none;
  }
`;
const FlexRow2 = styled(FlexRow1)``;

const MobileFlexDisplay = styled.section`
  display: none;
  @media (max-width: 820px) {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export {
  PortfolioMainWrapper,
  Photo,
  PhotoContainer,
  FlexRow1,
  FlexRow2,
  MobileFlexDisplay
};
