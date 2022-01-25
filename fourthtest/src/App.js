//import logo from './logo.svg';
import Main from './component/Main'
import mainData from './component/mainData'
import Contact from './component/Contact'
import './App.css';

function App() {
  function handlerButton(e) {
    e.preventDefault();
    console.log("Hello !")
    alert('Hey ! Hello !')
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
    </div>
  );
}

export default App;

//  const handlerButton = document.getElementById('');
//  handlerButton.onMouseMove('click', () => {
//    console.log("yeah")
//  })
//<button onClick={handlerButton} className='btn-custom'>submit</button>