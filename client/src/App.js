import React, { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Posts from "./components/Posts/posts";
import Form from "./components/Form/Form";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/auth" element={<Auth />} exact />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
