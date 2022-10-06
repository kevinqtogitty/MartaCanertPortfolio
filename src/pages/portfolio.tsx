import React, { useState } from 'react';
import {
  ModalMask,
  ModalPhotoWrapper,
  ModalProjectDescriptionWrapper,
  ProjectDescription
} from '../styles/SC_modal';
import {
  PortfolioMainWrapper,
  Photo,
  PhotoContainer,
  FlexRow1,
  FlexRow2,
  MobileFlexDisplay,
  FlexboxWrapper
} from '../styles/SC_portfolio';

import data from '../../db.json';
import { config, useSpring } from '@react-spring/web';

const Portfolio: React.FC = (): JSX.Element => {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [modalImgSrc, setModalImgSrc] = useState<string[]>([]);
  const [modalProjectName, setModalProjectName] = useState<string>('');
  const [desktopModalHeightProperty, setdesktopModalHeightProperty] =
    useState<string>('');

  const dataRow1 = data.picturesDesktop.row1;
  const dataRow2 = data.picturesDesktop.row2;
  const dataMobile = data.picturesMobile;

  const handleModalIsActive = (
    photos: string[],
    heightProperty: string,
    projectName: string
  ) => {
    setModalIsActive((state) => !state);
    setModalImgSrc(photos);
    setModalProjectName(projectName);
    setdesktopModalHeightProperty(heightProperty);
  };

  const portfolioPageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow
  });

  return (
    <PortfolioMainWrapper style={portfolioPageAnimation}>
      {modalIsActive ? (
        <ModalMask onClick={() => setModalIsActive((state) => !state)}>
          <ModalProjectDescriptionWrapper>
            <ProjectDescription>
              <h2>{modalProjectName}</h2>
              <>Marta Canert Design</>
            </ProjectDescription>
            <ModalPhotoWrapper>
              {modalImgSrc.map((url, key) => (
                <Photo
                  src={`${url}`}
                  height={desktopModalHeightProperty}
                  key={key}
                />
              ))}
            </ModalPhotoWrapper>
          </ModalProjectDescriptionWrapper>
        </ModalMask>
      ) : null}
      <FlexboxWrapper>
        <FlexRow1>
          {dataRow1.map((project, key) => (
            <PhotoContainer key={key}>
              <Photo
                src={`${project.photos[0]}`}
                onClick={() =>
                  handleModalIsActive(
                    project.photos,
                    project.view_height,
                    project.project_name
                  )
                }
              />
            </PhotoContainer>
          ))}
        </FlexRow1>
        <FlexRow2>
          {dataRow2.map((project, key) => (
            <PhotoContainer key={key}>
              <Photo
                src={`${project.photos[0]}`}
                onClick={() =>
                  handleModalIsActive(
                    project.photos,
                    project.view_height,
                    project.project_name
                  )
                }
              />
            </PhotoContainer>
          ))}
        </FlexRow2>
      </FlexboxWrapper>
      <MobileFlexDisplay>
        {dataMobile.map((project, key) => (
          <PhotoContainer key={key} className="mobile">
            <Photo
              src={`${project.photos[0]}`}
              onClick={() =>
                handleModalIsActive(
                  project.photos,
                  project.view_height,
                  project.project_name
                )
              }
            />
          </PhotoContainer>
        ))}
      </MobileFlexDisplay>
    </PortfolioMainWrapper>
  );
};

export default Portfolio;
