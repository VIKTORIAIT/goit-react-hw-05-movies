import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import s from "./App.module.css";
import HomeView from "./views/HomePage.jsx";
import NotFoundView from "./views/NotFoundView";
import AppBar from "./components/AppBar/AppBar";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
// import

export default function App() {
  return (
    // <Container>
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      {/* </Container> */}
    </>
  );
}
