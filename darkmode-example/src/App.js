import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      
      <h1>React Toggle Dark Mode</h1>
      <h2>Persistant DarkMode with useEffect() and localStorage !</h2>
      
      {darkMode && <button onClick={toggleDarkMode} style={{background: 'black',
        color: 'lightgrey'}}>
        {"Switch to Light Mode"}
      </button>}
      
      {!darkMode && <button onClick={toggleDarkMode} style={{background: 'grey',
        color: 'white'}}>
        {"Switch to Dark Mode"}
      </button>}

      <p>The purpose of lorem ipsum is to create a natural looking block of text 
        (sentence, paragraph, page, etc.) that doesn't distract from the layout. A 
        practice not without controversy, laying out pages with meaningless filler 
        text can be very useful when the focus is meant to be on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when Letraset 
        used it on their dry-transfer sheets, and again during the 90s as desktop publishers 
        bundled the text with their software. Today it's seen all around the web; on 
        templates, websites, and stock designs. Use our generator to get your own, or read 
        on for the authoritative history of lorem ipsum.
      </p>
      <p>The purpose of lorem ipsum is to create a natural looking block of text 
        (sentence, paragraph, page, etc.) that doesn't distract from the layout. A 
        practice not without controversy, laying out pages with meaningless filler 
        text can be very useful when the focus is meant to be on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when Letraset 
        used it on their dry-transfer sheets, and again during the 90s as desktop publishers 
        bundled the text with their software. Today it's seen all around the web; on 
        templates, websites, and stock designs. Use our generator to get your own, or read 
        on for the authoritative history of lorem ipsum.
      </p>
    </div>
  );
}

export default App;
