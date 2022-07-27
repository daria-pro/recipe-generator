import { Typography } from "@mui/material";
import { StyledRecipeCard } from "./RecipeCardStyle";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const list = [...Array(20).keys()];
  const ingredients = list.map((item, index) => ({
    name: `strIngredient${index + 1}`,
    measure: `strMeasure${index + 1}`,
  }));

  return (
    <StyledRecipeCard>
      <Link to={`:${recipe.idMeal}`} className="card__link">
        <Typography className="card__title">{recipe.strMeal}</Typography>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <ul className="card__list">
          {ingredients.map((item, index) =>
            recipe[item.name] ? (
              <li key={index} className="card__list-item">
                <p>{recipe[item.name]}</p>
                <p className="card__measure">{recipe[item.measure]}</p>
              </li>
            ) : null
          )}
        </ul>
      </Link>
    </StyledRecipeCard>
  );
};

export default RecipeCard;
