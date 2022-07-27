import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../Navbar/NavbarStyle";
import { StyledRecipe } from "./RecipeStyle";

const Recipe = ({ recipe }) => {
  const list = [...Array(20).keys()];
  const ingredients = list.map((item, index) => ({
    name: `strIngredient${index + 1}`,
    measure: `strMeasure${index + 1}`,
  }));

  return (
    <Container>
      <StyledRecipe>
        <StyledNavbar sx={{ justifyContent: "center" }}>
          <Container>
            <Link className="recipe__goback" to="/">
              Go back
            </Link>
          </Container>
        </StyledNavbar>

        <h1>{recipe.strMeal}</h1>
        <div className="recipe__top-info">
          <img
            className="recipe__image"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <ul className="recipe__list">
            <h3>Ingredients:</h3>
            {ingredients.map((item, index) =>
              recipe[item.name] ? (
                <li key={index} className="recipe__list-item">
                  <p>{recipe[item.name]}</p>
                  <p className="recipe__measure">{recipe[item.measure]}</p>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="recipe__instructions">
          <h3>Instructions:</h3>
          <p>{recipe.strInstructions}</p>
        </div>
      </StyledRecipe>
    </Container>
  );
};

export default Recipe;
