import styled from 'styled-components';

const ImageContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  background: #f0f0f0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Styled = {
  ImageContainer,
  Image,
};

export default Styled;
