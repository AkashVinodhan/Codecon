import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setdarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setdarkMode={setdarkMode} />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
