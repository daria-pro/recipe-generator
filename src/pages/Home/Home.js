import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipesList from "../../components/RecipesList/RecipesList";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <SideBar />
      </Grid>
      <Grid item xs={9}>
        <Navbar />
        <RecipesList />
      </Grid>
    </Grid>
  );
};

export default Home;
