import React from "react";

import {Routing} from "./routes/Routing"
import {NavigationBar} from "./components/navigationbar/NavigationBar"
import "./shared/global/global.css"

function App() {
  return (
    <Routing>
      <NavigationBar/>      
    </Routing>
  );
}

export default App;
