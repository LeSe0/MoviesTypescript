// React
import React from "react";
import { IMenu } from "providers/types";
// Components
import { Grid } from "@mui/material";

interface Props {
  menuData: IMenu[];
}

export default function MobileMenu({ menuData }: Props) {
  return <Grid container></Grid>;
}
