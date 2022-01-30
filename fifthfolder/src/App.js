import React from 'react'
import Memes from './component/Memes'
import Card from './component/Card'
import numberCard from "./component/numberCard"
import './App.css';

function App() {
  const dataCard = numberCard
                    .filter(item => item.age > 29) //more than 29 years
                    .sort((a,b) => b.age - a.age) //from largest to smallest
                    .map(item => {
    console.log(item)
    return  <Card
              id={item.id}
              name={item.name}
              age={item.age}
              img={item.img}
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
      <div className="card--div">
        {dataCard}
      </div>
    </div>
  )
}

export default App;
