import { useSpring, config } from '@react-spring/web';
import React from 'react';
import {
  MainAboutMeWrapper,
  Photo,
  AboutWrapper,
  HeadersWrapper,
  AboutInfo,
  LI,
  UL,
  H2,
  H3,
  MobileWrapper
} from '../styles/SC_about';

const About: React.FC = (): JSX.Element => {
  const aboutPageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  });

  return (
    <MainAboutMeWrapper style={aboutPageAnimation}>
      <H2 className="mobile">Let's meet eachother!</H2>
      <MobileWrapper>
        <Photo src="/photos/Marta.jpg" />
        <AboutWrapper>
          <H2 className="desktop">Let's meet each other!</H2>
          <HeadersWrapper>
            {' '}
            <H3 className="name">Marta Canert</H3>
            <H3>CG ARTIST</H3>
          </HeadersWrapper>

          <AboutInfo>
            <UL>
              <LI>
                {' '}
                Interior Designer by profession and 3D Visualizer by passion.
              </LI>
              <LI>
                {' '}
                Graduate of the Academy of Fine Arts in Łódź and Technical
                University of Łódź.
              </LI>
              <LI>
                A self-taught 3D artist specializing in interiors and product
                visualizations.
              </LI>
              <LI>I constantly strive for high quality and photorealism</LI>
              <LI>Let's create something amazing together!</LI>
            </UL>
          </AboutInfo>
        </AboutWrapper>
      </MobileWrapper>
    </MainAboutMeWrapper>
  );
};

export default About;
