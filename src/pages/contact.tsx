import { config, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import {
  ContactInfo,
  ContactMainWrawrapper,
  H1,
  H3,
  SocialIcon,
  SocialIconsWrapper
} from '../styles/SC_contact';

const socials = {
  linkedIn: import.meta.env.VITE_PUBLIC_LINKEDIN,
  instagram: import.meta.env.VITE_PUBLIC_INSTAGRAM,
  behance: import.meta.env.VITE_PUBLIC_BHEANCE
};

const Contact: React.FC = (): JSX.Element => {
  const [instagramIsHovered, setInstagramIsHovered] = useState<boolean>(false);
  const [linkedInIsHovered, setLinkedInIsHovered] = useState<boolean>(false);
  const [behanceIsHovered, setBehanceIsHovered] = useState<boolean>(false);

  const animateIG = useSpring({
    from: { transform: 'translateY(0px)' },
    to: {
      transform: instagramIsHovered ? 'translateY(-10px)' : 'translateY(0px)'
    }
  });

  const animateLI = useSpring({
    from: { transform: 'translateY(0px)' },
    to: {
      transform: linkedInIsHovered ? 'translateY(-10px)' : 'translateY(0px)'
    }
  });

  const animateBH = useSpring({
    from: { transform: 'translateY(0px)' },
    to: {
      transform: behanceIsHovered ? 'translateY(-10px)' : 'translateY(0px)'
    }
  });

  const contactPageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  });

  return (
    <ContactMainWrawrapper style={contactPageAnimation}>
      <ContactInfo>
        <H1>Let's keep in touch!</H1>
        <SocialIconsWrapper>
          <a href={socials.instagram}>
            <SocialIcon
              style={animateIG}
              onMouseEnter={() => setInstagramIsHovered((state) => !state)}
              onMouseLeave={() => setInstagramIsHovered((state) => !state)}
              className="instagram"
            />
          </a>
          <a href={socials.linkedIn}>
            <SocialIcon
              style={animateLI}
              onMouseEnter={() => setLinkedInIsHovered((state) => !state)}
              onMouseLeave={() => setLinkedInIsHovered((state) => !state)}
              className="linkedIn"
            />
          </a>
          <a href={socials.behance}>
            <SocialIcon
              style={animateBH}
              onMouseEnter={() => setBehanceIsHovered((state) => !state)}
              onMouseLeave={() => setBehanceIsHovered((state) => !state)}
              className="behance"
            />
          </a>
        </SocialIconsWrapper>
        <H3>canert.studio@gmail.com</H3>
        <H3>+48 724 809 528</H3>
      </ContactInfo>
    </ContactMainWrawrapper>
  );
};

export default Contact;
