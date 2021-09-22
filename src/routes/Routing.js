import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DrinksView } from "../views/DrinksView"
import { HomeView } from "../views/HomeView"
import { SigninView } from "../views/SigninView"

export const Routing = (props) => {
    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/drinks" component={DrinksView}/>
                <Route exact path="/signin" component={SigninView}/>
                <Route component={HomeView} />        
            </Switch>
        </Router>
    )
}