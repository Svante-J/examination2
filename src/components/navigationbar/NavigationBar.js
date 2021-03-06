import "./NavigationBar.css"
import { useContext } from "react"
import LogoType from "../../shared/img/logotype.svg"
import { useHistory } from "react-router"
import { UserContext } from "../../shared/global/provider/UserProvider"
import { Profile } from "../profile/Profile"
import Routingpath from "../../routes/RoutingPath"



export const NavigationBar = () => {
   const history = useHistory();
   const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

   const displayUserIfAuthenticated = () => {       
        return (authenticatedUser)
       ? <div className="profile"><Profile/></div>
       : <span onClick={() => history.push(Routingpath.signInView, "Hej Björn")} className="signIn">Sign in</span>       
   }

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push(Routingpath.homeView)}
            className="logotype"
            src={LogoType} 
            alt="logoimg..." /> 
            {displayUserIfAuthenticated()}            
        </div>
    )
}