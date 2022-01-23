import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css';


function App() {
  /*const dispName = document.querySelector("card-name");
  dispName.addEventListener("click", () => {
    dispName.classList.toggle("card-namejs");
  });*/
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Main />
      <Navbar />
    </div>
  );
}

export default App;
