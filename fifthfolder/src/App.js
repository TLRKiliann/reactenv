import Memes from './component/Memes'
import Card from './component/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello my React !
        </p>
      </header>
      <main>
        <Memes />
      </main>
      <Card id={num}/>
    </div>
  );
}

export default App;
