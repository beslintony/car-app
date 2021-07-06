import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogo from '../../../assets/images/car-logo.png';

const LogoContainer = styled.div`
  ${tw`
flex
items-center
`};
`;

const LogoText = styled.div`
  ${tw`
text-xl
md:text-2xl
font-bold
text-blackedm-1
`};
`;

const Image = styled.div`

width: auto;
${tw`
    h-6
    md:h-9
`};

img{
    width: auto,
    height: 100%
}
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogo} />
      </Image>
      <LogoText>yourcar</LogoText>
    </LogoContainer>
  );
};

export default Logo;
