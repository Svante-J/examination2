import "./NavigationBar.css"
import LogoType from "../../shared/img/logotype.svg"


export const NavigationBar = () => {
    return(
        <div className="navigationBarWrapper">
            <img 
            className="logotype"
            src={LogoType} 
            alt="logoimg..." />
            <span>Sign in</span>
        </div>
    )
}