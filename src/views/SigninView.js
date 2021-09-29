import React, {useState, useContext} from "react"
import { UserContext } from "../shared/global/provider/UserProvider"
import { useHistory, useLocation, useParams } from "react-router"
import queryString from 'query-string'

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
    // const showLocation = () =>{
    // const Param = useParams();
    // }

    return(
        <div>                 
           <span> Username: </span> <input onChange={event => setUsername(event.target.value)} /> <br/>
           <span> Password: </span> <input type="password" onChange={event => setPassword(event.target.value)} /> <br/>
           <button onClick={() => login()}>Login</button>  
           {/* <p>{queryString}</p>        */}
                                
        </div>
    )
}