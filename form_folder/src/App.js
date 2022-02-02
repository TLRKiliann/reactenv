import Card from './component/Card'
import dataCard from './component/dataCard'
import './App.css';

function App() {
  const questAns = dataCard.map(item => {
    return <Card 
              id={item.id}
              name={item.name}
              age={item.age}
              status={item.status}
              question={item.question}
              punch={item.punch}
            />
  })
  return(
      <div className="App">
        <header className="App-header">
          <h1>My REACT</h1>
        </header>
          {questAns}
      </div>
  )
}

export default App;
