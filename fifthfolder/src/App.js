import React from 'react'
import Memes from './component/Memes'
import Card from './component/Card'
import numberCard from "./component/numberCard"
import './App.css';

function App() {
  const [isShowPunch, setShowPunch] = React.useState("")

  function toggleCall() {
    setShowPunch(prevshow => !prevshow)
  }

  const dataCard = numberCard
                    .filter(item => item.age > 27) //more than 29 years
                    .sort((a, b) => b.age - a.age) //from largest to smallest
                    .map(item => {
    console.log(item)
    return  <Card
              id={item.id}
              name={item.name}
              age={item.age}
              status={item.status}
              img={item.img}
            />
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello my React !
        </h1>
      </header>
      <main>
        <Memes />
      </main>
      <div className="card--div">
        {dataCard}
      </div>
      <p>Something should be follow by text...</p>
      {!isShowPunch && <p>Very well !</p>}
      <button onClick={toggleCall} className="btn--show">{isShowPunch ? "Show" : "Hide"} me Punch</button>
    </div>
  )
}

//better than :
//{isShowPunch && <button onClick={toggleCall} className="btn--show">Show me Punch</button>}
//{!isShowPunch && <button onClick={toggleCall} className="btn--show">Hide me Punch</button>}

export default App;
