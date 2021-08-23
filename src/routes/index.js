import {  Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { AnimatePresence } from "framer-motion";

//PAGES
import Home from "../pages/home";
import Login from "../pages/login/";
import Register from "../pages/register/";
import MySongs from "../pages/mysongs/index";



const Routes = () => {
  const state = useSelector((state) => state.login);

  return (
    <AnimatePresence>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        {state.token ? (
          <>
            <Route exact path="/mysongs">
              <MySongs />
            </Route>
          </>
        ) : (
          <Redirect to="/"/>
        )}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;