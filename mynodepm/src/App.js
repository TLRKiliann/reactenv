import Pass from './components/Pass'
import Card from './components/Card'
import dataCard from './components/dataCard'
import './App.css';

function App() {
  const retCard = dataCard.map(item => {
    return (
      <Card
        id={item.id}
        name={item.name}
        age={item.age}
      />
    );
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey does it works ?!!</h1>
      </header>
      <div className="div--pass">
        <Pass />
      </div>
      <div className="div--returncard">
        {retCard}
      </div>
    </div>
  );
}

export default App;