// App.js
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [toggleMode, setToggleMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "Switch to Light"
      : "Switch to Dark"
  );
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const handleDarkMode = () => {
    if (toggleMode === "Switch to Dark") {
      setToggleMode("Switch to Light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setToggleMode("Switch to Dark");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Router basename="/Text-Utils/">
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
