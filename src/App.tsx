import React from "react";
import routes from "routes";
import theme from "providers/theme";
// styles
import "./App.css";
// Components
import Layout from "layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
