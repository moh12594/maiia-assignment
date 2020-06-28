import React, { ReactElement } from 'react';
import Styled from './picture.styled';

interface IProps {
  className?: string
  src: string
  alt: string
}

function Picture({
  src,
  alt,
  className,
}: IProps): ReactElement {
  return (
    <Styled.ImageContainer className={className}>
      <Styled.Image src={src} alt={alt} />
    </Styled.ImageContainer>
  );
}

Picture.defaultProps = {
  src: '',
  alt: '',
};

export default Picture;
