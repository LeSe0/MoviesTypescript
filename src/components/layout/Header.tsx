// React
import React from "react";
import { IMenu } from "src/providers/types";
import { useGetMovieInfo } from "src/hooks/api/movie";
// Components
import { Grid, Typography } from "@mui/material";
import { DesktopMenu, MobileMenu } from "src/components/header/menu";
import Search from "src/components/header/Search";

const menu: IMenu[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/latest",
    title: "Latest",
  },
  {
    path: "/best",
    title: "The Bests",
  },
];

export default function Header() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      bgcolor="rgba(0,0,0,0.7)"
      sx={{
        position: "fixed",
        top: "0",
        py: "10px",
        px: "35px",
        "& p , span": {
          fontFamily: "Montserrat",
        },
        backdropFilter: "blur(4px)",
      }}
    >
      <Grid item>
        <Typography
          sx={{
            color: "#dc2a22",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        >
          Movies
        </Typography>
      </Grid>
      <Grid item>
        <DesktopMenu menuData={menu} />
        <MobileMenu menuData={menu} />
      </Grid>
      <Grid item display={{ xs: "none", md: "block" }}>
        <Search />
      </Grid>
    </Grid>
  );
}
