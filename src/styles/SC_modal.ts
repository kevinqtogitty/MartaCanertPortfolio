import styled from 'styled-components';

const ModalMask = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  z-index: 1;
  @media (max-width: 500px) {
    align-items: flex-start;
  }
  /* overflow: scroll; */
`;

const ModalPhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
  row-gap: 1rem;
`;

const ModalProjectDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0.5rem;
  @media (max-width: 820px) {
    align-items: center;
  }
`;

const ProjectDescription = styled.div`
  padding: 1rem;
  background-color: rgba(3, 2, 1, 0.8);
  color: #fff;
  width: fit-content;
  border-radius: 6px;
  @media (max-width: 500px) {
    text-align: center;
    width: 100vw;
    padding: 1rem;
    border-radius: 0px;
  }
`;

export {
  ModalMask,
  ModalPhotoWrapper,
  ModalProjectDescriptionWrapper,
  ProjectDescription
};
