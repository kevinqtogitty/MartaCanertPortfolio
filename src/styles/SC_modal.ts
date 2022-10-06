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
`;

export { ModalMask, ModalPhotoWrapper, ModalProjectDescriptionWrapper };
