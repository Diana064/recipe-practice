import { Recipe } from './Recipe/Recipe';
import recipes from '../recipe.json';

export const App = () => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};
