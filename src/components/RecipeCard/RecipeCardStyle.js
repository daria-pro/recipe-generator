import { styled } from "@mui/material/styles";

export const StyledRecipeCard = styled("div")(({ theme }) => ({
  maxWidth: "345px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.08)",
  transition: "0.3s",
  padding: "20px 10px",
  position: "relative",

  "&:hover": {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.3)",
    cursor: "pointer",
  },

  "& .card": {
    "&__link": {
      textDecoration: "none",
    },

    "&__title": {
      marginBottom: "15px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "100%",
      whiteSpace: "nowrap",
      color: "#000",
      textAlign: "center",
    },

    "&__list": {
      listStyle: "none",
      padding: 0,
      display: "none",
    },

    "&__list-item": {
      display: "flex",
      justifyContent: "space-between",
    },

    "&__list-item p": {
      margin: 0,
    },
  },

  "& img": {
    maxWidth: "100%",
  },
}));
