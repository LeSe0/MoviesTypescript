// React
import React from "react";
import { IMenu } from "providers/types";
// Components
import { Grid, Typography } from "@mui/material";
import DesktopMenu from "components/header/menu/DesktopMenu";
import MobileMenu from "components/header/menu/MobileMenu";

type Props = {};

const menu: IMenu[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/latest",
    title: "Latest",
  },
];

export default function Header({}: Props) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      bgcolor="rgba(0,0,0,0.5)"
      sx={{
        position: "sticky",
        top : "0",
        py: "10px",
        px: "35px",
        "& p , span": {
          fontFamily: "Montserrat",
        },
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
      <Grid item></Grid>
    </Grid>
  );
}
