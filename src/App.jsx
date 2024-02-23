import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./Context/Auth";
import "./App.css";

function App() {
  let [darkmode, setDarkmode] = useState(false);
  return (
    <AuthProvider>
      <div className={"app " + (darkmode && "dark ")}>
        <div className="">
          <Outlet context={[darkmode, setDarkmode]} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
