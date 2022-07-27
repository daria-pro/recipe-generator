import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import {
  fetchById,
  getRecipeError,
  getRecipeStatus,
  selectOneRecipe,
} from "../../features/recipes/recipesSlice";

const RecipePage = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectOneRecipe);
  const recipeStatus = useSelector(getRecipeStatus);
  const recipeError = useSelector(getRecipeError);
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(2);
    dispatch(fetchById(id));
  }, []);

  let content;
  if (recipeStatus === "loading") {
    content = <CircularProgress />;
  } else if (recipeStatus === "succeeded") {
    recipe
      ? (content = <Recipe recipe={recipe.meals[0]} />)
      : (content = <h1>Recipe not found.</h1>);
  } else if (recipeStatus === "failed") {
    content = <p>{recipeError}</p>;
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default RecipePage;
