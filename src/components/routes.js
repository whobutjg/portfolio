import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "../pages/resume";

const Routes = () => {
  return (
    <Switch>
      <Route path='/resume' component={Resume} />
    </Switch>
  );
};

export default Routes;
