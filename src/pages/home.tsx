import { config, useSpring } from '@react-spring/web';
import React from 'react';
import { Content, LandingPageContent } from '../styles/SC_landing_page';

const Home: React.FC = (): JSX.Element => {
  const animateHomePage = useSpring({
    from: { opacity: 0, transform: 'translateY(150%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    config: config.slow
  });

  return (
    <LandingPageContent>
      <Content style={animateHomePage}>
        Hello,
        <br></br>
        how are you today?
      </Content>
    </LandingPageContent>
  );
};

export default Home;
