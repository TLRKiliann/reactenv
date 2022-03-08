//import Funceffect from './components/Funceffect'
//import Fetcheffect from './components/Fetcheffect'
//import Searchscrap from './components/Searchscrap'
import Primaryaxios from './components/Primaryaxios'
//import Secondfetch from './components/Secondfetch'
//import Apiaxios from './components/Apiaxios'
//import Apifetchclass from './components/Apifetchclass'
//import Toggleskills from './components/Toggleskills'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='div--title'>Weather API</h1>
      </header>
      <div className='div--fetcheffect'>
        <Primaryaxios />
      </div>
    </div>
  );
}

export default App;

//      <Apiaxios />
//      <Apifetchclass />
//      <Funceffect />
//      <Secondfetch />
//      <Toggleskills />
//      <Fetcheffect />
//        <Searchscrap />