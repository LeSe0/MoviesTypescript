// React
import React from "react";
// Components
import { Box } from "@mui/material";

const Main: React.FC = function Main() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/sanddust2.jpg)",
        height: "800px",
        width: "100%",
        bgPosition : "center",
        backgroundSize : "cover"

      }}
    ></Box>
  );
};

export default Main;
