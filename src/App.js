
import {Routing} from "./routes/Routing"
import {NavigationBar} from "./components/navigationbar/NavigationBar"
import {UserProvider } from "./shared/global/provider/UserProvider"
import "./shared/global/css/global.css"


function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar/>      
      </Routing>
    </UserProvider>
  );
}

export default App;
