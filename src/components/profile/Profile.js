import { useContext } from "react"
import { UserContext } from "../../shared/global/provider/UserProvider"
import { useHistory } from "react-router"
import "./Profile.css"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        history.push("/")
    }

    return(
        <div className="profileWrapper">
            <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt="error.." />
            <span className="displayUsername">{authenticatedUser}</span>
            <div className="profileDropdown">
                <a onClick={() => history.push("/settings")}>Settings</a>
                <a onClick={() => history.push("/profile")}>Profile</a>
                <hr/>
                <a onClick={() => logout()}>Logout</a>
            </div>
        </div>
    )
}