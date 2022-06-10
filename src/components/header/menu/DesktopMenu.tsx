// React
import React from "react";
import { IMenu } from "src/providers/types";
import { Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface Props {
  menuData: IMenu[];
}

export default function DesktopMenu({ menuData }: Props) {
  const location = useLocation();

  return (
    <Grid container display={{ xs: "none", md: "flex" }}>
      {menuData.map(({ title, path }, i) => {
        return (
          <Grid item ml="25px" key={"desktopMenuNavigation" + path}>
            <Link
              to={path}
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  color: location.pathname === path ? "#dc2a22" : "white",
                  fontSize: { md: "16px", lg: "19px" },
                  fontWeight: "600",
                  transition : "0.5s",
                  '&:hover' : {
                    color :"#dc2a22",
                    transition : "0.5s"
                  }
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
