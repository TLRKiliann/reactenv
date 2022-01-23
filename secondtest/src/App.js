import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Contact from "./components/Contact";
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
      <Contact
        img="./images/name-img.png"
        name="Mr Wiskerson"
        phone="(345) 888-1234"
        email="mr.wisker@gmail.com"
      />
      <Contact
        img="./images/name-img.png"
        name="Miss Wandetta"
        phone="(333) 777-5678"
        email="miss.wandetta@gmail.com"
      />
      <Contact
        img="./images/name-img.png"
        name="Mr Hellmann"
        phone="(222) 333-9119"
        email="mr.hellmann@gmail.com"
      />
    </div>
  );
}

export default App;
