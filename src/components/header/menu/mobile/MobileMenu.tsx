// React
import React, { useCallback, useState } from "react";
import { IMenu } from "src/providers/types";
// Components
import { Grid, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import MobileDrawer from "./components/MobileDrawer";

interface Props {
  menuData: IMenu[];
}

export default function MobileMenu({ menuData }: Props) {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Grid container display={{ xs: "flex", md: "none" }}>
      <IconButton
        onClick={handleOpen}
        sx={{
          "& svg": {
            width: "30px",
            height: "30px",
            color: "white",
          },
          mr: open ? "17px" : "0px",
        }}
      >
        <MenuIcon />
      </IconButton>
      <MobileDrawer
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        menuData={menuData}
      />
    </Grid>
  );
}
