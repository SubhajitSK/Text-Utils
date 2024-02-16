import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [toggleMode, setToggleMode] = useState("Switch to Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const handleDarkMode = () => {
    if (toggleMode === "Switch to Dark") {
      setToggleMode("Switch to light");
      document.documentElement.classList.add("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setToggleMode("Switch to Dark");
      document.documentElement.classList.remove("dark");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar handleDarkMode={handleDarkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
      <About />
    </>
  );
}

export default App;
