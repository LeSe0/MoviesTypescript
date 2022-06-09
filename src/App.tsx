import React from "react";
// styles
import "./App.css";
// Components
import Layout from "layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((el) => {
          return (
            <Route path={el.path} element={el.Component as React.ReactNode} />
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
