import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DrinksView } from "../views/DrinksView";
import { HomeView } from "../views/HomeView";
import { SigninView } from "../views/SigninView";
import { UserContext } from "../shared/global/provider/UserProvider";
import { ProfileView } from "../views/ProfileView";
import { SettingsView } from "../views/SettingsView";
import {RoutingPath} from "./RoutingPath"


export const Routing = (props) => {
  
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const checkIfUserIsAuthenticated = () => {

    setAuthenticatedUser(localStorage.getItem("username"))
}

    useEffect(() => {
        checkIfUserIsAuthenticated()
    }, []);

  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.DrinksView} component={DrinksView} />
        <Route exact path={RoutingPath.SigninView} component={SigninView} />
        <Route exact path={RoutingPath.ProfileView} component={ProfileView} />
        <Route exact path={RoutingPath.SettingsView} component={SettingsView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
