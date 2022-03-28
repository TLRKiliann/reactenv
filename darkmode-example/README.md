# Dark Mode

One button (btn) to switch with dark or light mode.

`2 files : App.js & App.css`

**To change style with data-theme and CSS :**

```
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
```

**App.css (with :root {})**

```
:root {
  --bg-color: #fff;
  --text-color: #000;
}

[data-theme="dark"] {
  --bg-color: #3F3F3F;
  --text-color: #fff;
}
```

**With className .App in CSS :**

```
.App {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

## useEffect with localStorage :

localStorage use **darkmode** as state & make the **state persistent**.  

```
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  ..
  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);
```

---

## toggleDarkMode()

`const storeDarkMode` is reused by useState() :

`useState(storeDarkMode)`

```
  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  
  const toggleDarkMode = () => setDarkMode(!darkMode); //ECMA-6
  
  ( function toggleDarkMode() {
        setDarkMode(!darkMode);
  	} ) //ECMA-5
```

---

## use props to switch button state :

If state darkMode exist button appear to display

      {!darkMode && <button onClick={toggleDarkMode} style={{background: 'grey',
        color: 'white'}}>
        {"Switch to Dark Mode"}
      </button>}

otherwise, Light Mode is choosen.

      {darkMode && <button onClick={toggleDarkMode} style={{background: 'black',
        color: 'lightgrey'}}>
        {"Switch to Light Mode"}
      </button>}
