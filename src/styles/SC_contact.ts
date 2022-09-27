import styled from 'styled-components';

const ContactMainWrawrapper = styled.article`
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

const SocialIcon = styled.img`
  width: 2.5rem;
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
