import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserInput from "./components/UserInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{minWidth:"100vw"}}>
      <header className="header">
        <h1>Pico y Placa predictor</h1>
      </header>
      
      <div className="formContainer">
        <UserInput />
      </div>
    </div>
  );
}

export default App;
