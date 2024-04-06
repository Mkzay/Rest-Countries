import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleClick={handleThemeSwitch} />} />
        <Route path="/CountryDetails/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}
