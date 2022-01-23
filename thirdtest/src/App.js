import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Images from "./images/portrait.png";
import Imgphone from "./images/phone.png";
import Imgmail from "./images/email.png";
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
      <div className="flex-contact">
        <Contact
          img={Images}
          name="Mr Wiskerson"
          imgphone={Imgphone}
          phone="(345) 888-1234"
          imgmail={Imgmail}
          email="mr.wisker@gmail.com"
        />
        <Contact
          img={Images}
          name="Miss Wandetta"
          imgphone={Imgphone}
          phone="(333) 777-5678"
          imgmail={Imgmail}
          email="miss.wandetta@gmail.com"
        />
        <Contact
          img={Images}
          name="Mr Hellmann"
          imgphone={Imgphone}
          phone="(222) 333-9119"
          imgmail={Imgmail}
          email="mr.hellmann@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;
