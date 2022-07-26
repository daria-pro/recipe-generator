import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/recipes";

const initialState = {
  recipes: [],
  categories: [],
  status: "idle",
  error: null,
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
      //searchByName
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
      //searchByCategory
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
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const loadedCategories = action.payload;
        state.categories = [].concat(loadedCategories);
      });
  },
});

export const selectAllRecipes = (state) => state.recipes.recipes;
export const getRecipesStatus = (state) => state.recipes.status;
export const getRecipesError = (state) => state.recipes.error;
export const selectAllCategories = (state) => state.recipes.categories;

export default recipesSlice.reducer;
