import React from "react";
import routes from "routes";
// styles
import "./App.css";
// Components
import Layout from "layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
