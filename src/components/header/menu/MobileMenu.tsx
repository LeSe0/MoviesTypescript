// React
import React from "react";
import { IMenu } from "src/providers/types";
// Components
import { Grid } from "@mui/material";

interface Props {
  menuData: IMenu[];
}

export default function MobileMenu({ menuData }: Props) {
  return (
    <Grid container display={{ xs: "flex", md: "none" }}>
      mobile Menu
    </Grid>
  );
}
