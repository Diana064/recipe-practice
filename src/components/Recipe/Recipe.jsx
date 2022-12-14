import PropTypes from 'prop-types';
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { InfoContainer, RecipeName } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { Box } from 'components/Box';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';

export const Recipe = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => {
  // const { name, time, servings, calories, image } = recipe;
  return (
    <Box p={3}>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <RecipeInfo text={`${time} min`} icon={BsAlarm} />
        <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
        <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
      </InfoContainer>
      <RecipeDifficulty difficulty={difficulty} />
    </Box>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.exact({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf([0, 1, 2]).isRequired,
  }).isRequired,
};
