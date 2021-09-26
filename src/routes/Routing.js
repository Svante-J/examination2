import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DrinksView } from "../views/DrinksView";
import { HomeView } from "../views/HomeView";
import { SigninView } from "../views/SigninView";
import { UserContext } from "../shared/global/provider/UserProvider";
import { ProfileView } from "../views/ProfileView";
import { SettingsView } from "../views/SettingsView";
import RoutingPath from "./RoutingPath"


export const Routing = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToView) => {
      return authenticatedUser ? HomeView : navigateToView
    }

    const blockIfNotAuthenticated = (navigateToView) => {
      return !authenticatedUser ? SigninView : navigateToView
    }

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
        <Route exact path={RoutingPath.drinksView} component={blockIfNotAuthenticated(DrinksView)} />
        <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SigninView)} />
        <Route exact path={RoutingPath.profileView} component={blockIfNotAuthenticated(ProfileView)} />
        <Route exact path={RoutingPath.settingsView} component={blockIfNotAuthenticated(SettingsView)} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
