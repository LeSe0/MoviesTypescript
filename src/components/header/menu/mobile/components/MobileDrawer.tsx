// React
import React, { memo } from "react";
import { IMenu } from "src/providers/types";
import { useLocation } from "react-router-dom";
// Components
import { Box, SwipeableDrawer, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  handleClose(): void;
  handleOpen(): void;
  open: boolean;
  menuData: IMenu[];
}

const MobileDrawer: React.FC<Props> = memo(({
  handleClose,
  handleOpen,
  open,
  menuData,
}) => {
  const location = useLocation();

  return (
    <SwipeableDrawer
      anchor="right"
      onClose={handleClose}
      open={open}
      onOpen={handleOpen}
      sx={{
        "& .MuiPaper-root": {
          width: { xs: "50vw", sm: "40vw" },
        },
      }}
    >
      {menuData.map(({ path, title }, i) => {
        return (
          <Link
            to={path}
            key={"mobileMenuNavItem-path-" + path}
            style={{
              textDecoration: "none",
            }}
          >
            <Box
              px="20px"
              py="10px"
              sx={{
                transition: "0.5s",
                pt: i === 0 ? "25px" : "10px",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.1)",
                  transition: "0.5s",
                },
              }}
            >
              <Typography
                sx={{
                  color: location.pathname === path ? "#dc2a22" : "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  transition: "0.5s",
                  "&:hover": {
                    color: "#dc2a22",
                    transition: "0.5s",
                  },
                }}
              >
                {title}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </SwipeableDrawer>
  );
})

export default MobileDrawer