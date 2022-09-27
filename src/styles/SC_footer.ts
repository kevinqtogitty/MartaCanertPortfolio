import styled from 'styled-components';

const GreyFooter = styled.footer`
  background-color: rgb(228, 233, 237, 1);
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  height: 4rem;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;
`;

const Name = styled.h3`
  color: #fff;
  font-weight: 300;
`;

export { GreyFooter, Name };
