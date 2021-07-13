import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import Car from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const TopCars = () => {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar1: ICar = {
    thumbnail:
      'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    name: 'Audi S3',
    mileage: '10K',
    gearType: 'Auto',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gas: 'petrol',
  };
  const testCar2: ICar = {
    thumbnail:
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    name: 'Honda City 5 Seater',
    mileage: '8K',
    gearType: 'Auto',
    dailyPrice: 50,
    monthlyPrice: 1300,
    gas: 'petrol',
  };

  const cars = [
    <Car {...testCar2} />,
    <Car {...testCar1} />,
    <Car {...testCar2} />,
    <Car {...testCar1} />,
    <Car {...testCar2} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'ClickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};

export default TopCars;
