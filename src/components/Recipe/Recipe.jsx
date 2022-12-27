import PropTypes from 'prop-types';
import { Component } from 'react';
import { InfoContainer, RecipeName, Image } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { Box } from 'components/Box';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };
  toggle = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  render() {
    const {
      recipe: { name, time, servings, calories, image, difficulty },
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Box p={3} width="400px">
        <Image src={image} alt={name} onClick={this.toggle} />
        <RecipeName>{name}</RecipeName>
        {isOpen && (
          <>
            <InfoContainer>
              <RecipeInfo servings={servings} time={time} calories={calories} />
            </InfoContainer>
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Box>
    );
  }
}
//   recipe: { name, time, servings, calories, image, difficulty },
// }) =>
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
