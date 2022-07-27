import { Typography } from "@mui/material";
import React from "react";
import { StyledNavbar } from "../Navbar/NavbarStyle";
import CategorySelect from "../CategorySelect/CategorySelect";
import { StyledSideBar } from "./SideBarStyle";

const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledNavbar
        position="static"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Typography>Ingredients</Typography>
      </StyledNavbar>
      <CategorySelect />
    </StyledSideBar>
  );
};

export default SideBar;
