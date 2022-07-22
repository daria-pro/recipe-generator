import { useSelector, useDispatch } from "react-redux";
import {
  selectAllRecipes,
  getRecipesStatus,
  getRecipesError,
  fetchRecipes,
} from "../../features/recipes/recipesSlice";
import { useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Box, Container, Grid } from "@mui/material";

const RecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectAllRecipes);
  const recipesStatus = useSelector(getRecipesStatus);
  const recipesError = useSelector(getRecipesError);

  useEffect(() => {
    if (recipesStatus === "idle") {
      dispatch(fetchRecipes());
    }
  }, [recipesStatus, dispatch]);

  let content;
  if (recipesStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (recipesStatus === "succeeded") {
    content = recipes[0].meals.map((recipe) => (
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={3}
        justifySelf="center"
        key={recipe.idMeal}
      >
        <RecipeCard recipe={recipe} />
      </Grid>
    ));
  } else if (recipesStatus === "failed") {
    content = <p>{recipesError}</p>;
  }

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        alignItems="center"
        alignContent="center"
      >
        {content}
      </Grid>
    </Container>
  );
};

export default RecipesList;
