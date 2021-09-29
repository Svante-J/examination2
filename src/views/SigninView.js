import React, {useState, useContext} from "react"
import { UserContext } from "../shared/global/provider/UserProvider"
import { useHistory, useLocation} from "react-router"


export const SigninView = () => {
    const history = useHistory()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext (UserContext)

    const login = () => {
        setAuthenticatedUser(username) 
        localStorage.setItem("username", username)   
        history.push("/")    
    }
    const location = useLocation()
    console.log(location)
    return(
        <div>                 
           <span> Username: </span> <input onChange={event => setUsername(event.target.value)} /> <br/>
           <span> Password: </span> <input type="password" onChange={event => setPassword(event.target.value)} /> <br/>
           <button onClick={() => login()}>Login</button>  
            <h6>{location.state}</h6>
                                
        </div>
    )
}