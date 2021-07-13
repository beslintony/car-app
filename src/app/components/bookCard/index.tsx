import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../button';
import { Marginer } from '../marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SCREENS } from '../responsive';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0.4);
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-2
pb-2 
pr-3
pl-3
md:pt-2
md:pb-2
md:pr-9
md:pl-9
`}
`;

const ItemContainer = styled.div`
  ${tw`
  flex 
  relative
  `}
`;
const Icon = styled.span`
  ${tw`
  text-red-500
  fill-current
  text-xs
  md:text-base
  mr-1
  md:mr-3
  `}
`;

const Name = styled.span`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
  cursor-pointer
  select-none
`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
  bg-gray-300 
  mr-2 
  ml-2 
  md:mr-5 
  md:ml-5
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 4.5em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
      top: 4.5em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
`}
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalOpen, setIsStartCalOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalOpen, setIsReturnCalOpen] = useState(false);

  const toggleStartCalendar = () => {
    setIsStartCalOpen(!isStartCalOpen);
    setIsReturnCalOpen(false);
  };
  const toggleReturnCalendar = () => {
    setIsReturnCalOpen(!isReturnCalOpen);
    setIsStartCalOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isStartCalOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isStartCalOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isReturnCalOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isReturnCalOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
