// import { Recipe } from './Recipe/Recipe';
// import recipes from '../recipe.json';
// import { Wrapper } from './App.styled';
import { PaymentWidget } from './paymentWidget/PaymentWidget';

export const App = () => {
  return (
    // <Wrapper>
    //   {recipes.map((recipe, index) => (
    //     <Recipe key={index} recipe={recipe} />
    //   ))}
    // </Wrapper>
    <PaymentWidget />
  );
};
