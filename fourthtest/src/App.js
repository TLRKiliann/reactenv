//import logo from './logo.svg';
import Main from './component/Main'
import mainData from './component/mainData'
import Contact from './component/Contact'
import Image from "./images/react_logo.png"
import './App.css';

function App() {
  function handlerButton(e) {
    e.preventDefault();
    console.log("Hello CLICK!")
    alert('Hey ! Hello !')
    }

  function handlerImg(e) {
    e.preventDefault();
    console.log("Img CLICK!")
    alert("You've clicked on Img !")
    }

  const mainSegData = mainData.map(main => {
    console.log(main.name, main.age);
    return  <Main
              name={main.name}
              lastname={main.lastname}
              age={main.age}
            />
  })
  return (
    <div className="App">
      <div className="header--div">
        <h1>Welcome to React World !</h1>
      </div>
      <div className="item--div">
        {mainSegData}
      </div>
      <Contact />
      <div className='form'>
        <input type='text' placeholder='first' />
        <input type='text' placeholder='second' />
        <button type='submit' onClick={handlerButton} className='btn-custom'>Click me !</button>
      </div>
      <div className="div--img">
        <img src={Image} onClick={handlerImg} className="img-custom" alt="logo-react" />
        <p>Click on me !</p>
      </div>
    </div>
  );
}

export default App;

//  const handlerButton = document.getElementById('');
//  handlerButton.onMouseMove('click', () => {
//    console.log("yeah")
//  })
//<button onClick={handlerButton} className='btn-custom'>submit</button>