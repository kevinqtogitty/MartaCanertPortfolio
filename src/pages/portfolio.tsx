import React, { useState } from 'react';
import { ModalMask } from '../styles/SC_modal';
import {
  PortfolioMainWrapper,
  Photo,
  PhotoContainer,
  FlexRow1,
  FlexRow2,
  MobileFlexDisplay
} from '../styles/SC_portfolio';

import data from '../../db.json';

const Portfolio: React.FC = (): JSX.Element => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [desktopModalHeightProperty, setdesktopModalHeightProperty] =
    useState('');

  const dataRow1 = data.picturesDesktop.row1;
  const dataRow2 = data.picturesDesktop.row2;
  const datatMobile = data.picturesMobile;

  const handleModalIsActive = (url: string, heightProperty: string) => {
    setModalIsActive((state) => !state);
    setModalImgSrc(url);
    setdesktopModalHeightProperty(heightProperty);
  };

  return (
    <PortfolioMainWrapper>
      {modalIsActive ? (
        <ModalMask onClick={() => setModalIsActive((state) => !state)}>
          <Photo src={`${modalImgSrc}`} height={desktopModalHeightProperty} />
        </ModalMask>
      ) : null}
      <FlexRow1>
        {dataRow1.map((url, key) => (
          <PhotoContainer key={key}>
            <Photo
              src={`${url}`}
              onClick={() => handleModalIsActive(url, '80vh')}
            />
          </PhotoContainer>
        ))}
      </FlexRow1>
      <FlexRow2>
        {dataRow2.map((url, key) => (
          <PhotoContainer key={key}>
            <Photo
              src={`${url}`}
              onClick={() => handleModalIsActive(url, '80vh')}
            />
          </PhotoContainer>
        ))}
      </FlexRow2>
      <MobileFlexDisplay>
        {datatMobile.map((url, key) => (
          <PhotoContainer key={key}>
            <Photo
              src={`${url}`}
              onClick={() => handleModalIsActive(url, 'auto')}
            />
          </PhotoContainer>
        ))}
      </MobileFlexDisplay>
    </PortfolioMainWrapper>
  );
};

export default Portfolio;
