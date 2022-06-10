// React
import React from "react";
import { IMenu } from "providers/types";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface Props {
  menuData: IMenu[];
}

export default function DesktopMenu({ menuData }: Props) {
  const location = useLocation();

  return (
    <Grid container>
      {menuData.map(({ title, path }, i) => {
        return (
          <Grid item ml={i != 0 ? "15px" : "0px"}>
            <Link
              to={path}
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  color: location.pathname == path ? "#dc2a22" : "white",
                  fontSize: "19px",
                  fontWeight: "semibold",
                }}
              >
                {title}
              </Typography>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
