// React
import React from "react";
// Components
import { Box, Grid, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type Props = {};

export default function Search({}: Props) {
  return (
    <Grid
      container
      justifyContent={{ sm: "flex-start", md: "flex-end" }}
      width={{ xs: "100%", md: "140px", lg : "180px" }}
      height="100%"
      alignItems="center"
      display={{ xs: "none", md: "flex" }}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          width: "35px",
          height: "35px",
          border: "1px solid white",
          borderRadius: "18px",
          transition: "0.5s",
          "&:hover": {
            width: "180px",
            "& .textFieldContainer": {
              display: "flex",
              height: "inherit",
              "& div": {
                height: "inherit",
              },
            },
          },
          [theme.breakpoints.between("md", "lg")]: {
            width: "34px",
            height: "34px",
            "&:hover": {
              width: "140px",
            },
          },
          [theme.breakpoints.down("md")]: {
            height: "40px",
            width: "40px",
            borderRadius: "30px",
            "&:hover": {
              width: "206px",
            },
          },
        })}
      >
        <Grid
          container
          justifyContent={{ sm: "flex-end", md: "flex-start" }}
          className="textFieldContainer"
          sx={{
            display: "none",
            "& div": {
              borderTopLeftRadius: "18px",
              borderBottomLeftRadius: "18px",
              borderColor: "white",
            },
            "& input": {
              pl: "10px",
              py: "0",
              pr: "10px",
              color: "white",
            },
          }}
        >
          <TextField
            sx={{
              width: "80%",
              "& fieldset": {
                border: "none",
              },
            }}
            placeholder="Поиск_"
          />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            position: "absolute",
            top: "0",
            right: { sm: "unset", md: "0" },
            left: { sm: "0", md: "unset" },
            zIndex: "1000",
            height: "36px",
            width: "34px",
            "& svg": {
              height: "30px",
              width: "30px",
              fill: "white",
              color: "white",
            },
            [theme.breakpoints.between("md", "lg")]: {
              height: "34px",
              width: "34px",
              "& svg": {
                height: "28px",
                width: "28px",
              },
            },
          })}
        >
          <SearchIcon />
        </Grid>
      </Box>
    </Grid>
  );
}
