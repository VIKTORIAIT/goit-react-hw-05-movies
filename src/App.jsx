import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import s from "./App.module.css";
import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() =>
  import("./views/HomePage.jsx" /* webpackChunkName: "HomeView" */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "NotFoundView" */)
);
// const AppBar = lazy(() =>
//   import("./components/AppBar/AppBar" /* webpackChunkName: "AppBar" */)
// );
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);

export default function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
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

          <Route path="/404">
            <NotFoundView />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </div>
  );
}
