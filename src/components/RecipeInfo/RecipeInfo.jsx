import PropTypes from 'prop-types';
import { Wrapper, InfoBlock } from './RecipeInfo.styled';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
export const RecipeInfo = ({ servings, time, calories }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <BsAlarm />
        {time} mins
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartPie />
        {servings} servings
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartBar />
        {calories} calories
      </InfoBlock>
    </Wrapper>
  );
};
