import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img alt="jeep" src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel the best experience with our rental deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          iaculis urna in erat lacinia, sit amet lobortis lacus feugiat. Nullam
          non finibus est. Integer malesuada ipsum porta, rhoncus erat nec,
          condimentum justo. Suspendisse quis sem eu massa aliquam malesuada at
          vulputate lectus. Donec sed enim nec risus interdum fringilla. Sed at
          tempus ante. In luctus vulputate nibh, vitae posuere neque vehicula
          ac. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Donec ac rutrum orci. Etiam id eleifend tellus, id scelerisque magna.
          Quisque sollicitudin elementum arcu, vitae imperdiet diam mattis non.
          Duis viverra arcu at purus faucibus luctus. Praesent eu elementum
          nisi, et fringilla dui. Pellentesque placerat massa non aliquet
          dapibus. Fusce pretium enim ex, et fringilla lacus bibendum a. Morbi
          magna elit, eleifend e
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
