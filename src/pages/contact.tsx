import React from 'react';
import {
  ContactInfo,
  ContactMainWrawrapper,
  H1,
  H3,
  SocialIcon,
  SocialIconsWrapper
} from '../styles/SC_contact';

const Contact = () => {
  return (
    <ContactMainWrawrapper>
      <ContactInfo>
        <H1>Let's keep in touch!</H1>
        <SocialIconsWrapper>
          <SocialIcon src="/icons/instagram.svg" />
          <SocialIcon src="/icons/facebook.svg" />
          <SocialIcon src="/icons/linkedin.svg" />
          <SocialIcon src="/icons/behance.svg" />
        </SocialIconsWrapper>
        <H3>canert.studio@gmail.com</H3>
        <H3>+48 724 809 528</H3>
      </ContactInfo>
    </ContactMainWrawrapper>
  );
};

export default Contact;
