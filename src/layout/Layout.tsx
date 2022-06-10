// React
import React from "react";
// Components
import { Stack } from "@mui/material";
import { Header, Footer } from "components/layout";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
