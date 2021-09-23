import "./NavigationBar.css"
import { useContext } from "react"
import LogoType from "../../shared/img/logotype.svg"
import { useHistory } from "react-router"
import { UserContext } from "../../shared/global/provider/UserProvider"


export const NavigationBar = () => {
   const history = useHistory();
   const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return(
        <div className="navigationBarWrapper">
            <img onClick={() => history.push("/")}
            className="logotype"
            src={LogoType} 
            alt="logoimg..." />

            <span onClick={() => history.push("/signin")}
            className="signIn">Sign in</span>
            <h3>{authenticatedUser}</h3>
            
        </div>
    )
}