import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      localStorage.setItem("theme", "dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setToggleMode("Switch to Dark");
      document.documentElement.classList.remove("dark");
      showAlert("Light mode has been enabled", "success");
      localStorage.setItem("theme", "light");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <>
        <Navbar handleDarkMode={handleDarkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
