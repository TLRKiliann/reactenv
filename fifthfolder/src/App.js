import Memes from './component/Memes'
import Card from './component/Card'
import numberCard from "./component/numberCard"
import './App.css';

function App() {
  const dataCard = numberCard.map(item => {
    return (
      <Card
        id={item.id}
        name={item.name}
        age={item.age}
      />
  })
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
      <div>
        {dataCard}
      </div>
    </div>
  )
};


export default App;
