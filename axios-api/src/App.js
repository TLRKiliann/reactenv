//import Fetcheffect from './components/Fetcheffect'
//import Secondfetch from './components/Secondfetch'
import Apiaxios from './components/Apiaxios'
//import Apifetchclass from './components/Apifetchclass'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='div--title'>Weather API</h1>
      </header>
      <div className='div--fetcheffect'>
        <Apiaxios />
      </div>
    </div>
  );
}

export default App;

//      <Apiaxios />
//      <Apifetchclass />
//      <Fetcheffect />
//      <Secondfetch />
