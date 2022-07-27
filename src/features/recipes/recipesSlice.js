import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/recipes";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,
  recipePage: null,
  recipeStatus: "idle",
  recipeError: null,
  categories: [],
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await api.get("/randomselection.php");
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "recipes/fetchCategories",
  async () => {
    try {
      const response = await api.get("/categories.php");
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const searchByName = createAsyncThunk(
  "recipes/searchByName",
  async (value) => {
    try {
      const response = await api.get(`/search.php?s=${value}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const searchByCategory = createAsyncThunk(
  "recipes/searchByCategory",
  async (value) => {
    try {
      const response = await api.get(`/filter.php?c=${value}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchById = createAsyncThunk(
  "recipes/fetchByid",
  async (value) => {
    try {
      const response = await api.get(`/lookup.php?i=${value}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedRecipes = action.payload;
        state.recipes = [].concat(loadedRecipes);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //search by name
      .addCase(searchByName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedRecipes = action.payload;
        state.recipes = [].concat(loadedRecipes);
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //search by category
      .addCase(searchByCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedRecipes = action.payload;
        state.recipes = [].concat(loadedRecipes);
      })
      .addCase(searchByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //fetch categories
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const loadedCategories = action.payload;
        state.categories = [].concat(loadedCategories);
      })
      //fetch by id
      .addCase(fetchById.pending, (state, action) => {
        state.recipeStatus = "loading";
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.recipeStatus = "succeeded";
        const loadedRecipes = action.payload;
        state.recipePage = loadedRecipes;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.recipeStatus = "failed";
        state.recipeError = action.error.message;
      });
  },
});

export const selectAllRecipes = (state) => state.recipes.recipes;
export const getRecipesStatus = (state) => state.recipes.status;
export const getRecipesError = (state) => state.recipes.error;
export const selectAllCategories = (state) => state.recipes.categories;

export const selectOneRecipe = (state) => state.recipes.recipePage;
export const getRecipeStatus = (state) => state.recipes.recipeStatus;
export const getRecipeError = (state) => state.recipes.recipeError;

export default recipesSlice.reducer;
