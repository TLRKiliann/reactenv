import Myfirst from './components/Myfirst'
import dataMyfirst from './components/dataMyfirst'
import './App.css';



function App() {
  const myVar = dataMyfirst.map(item => {
    return (
      <Myfirst 
        id={item.id}
        name={item.name}
        status={item.status}
      />
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ok, does it work ?</h1>
      </header>
      <div className='div--myvar'>
        {myVar}
      </div>
    </div>
  );
}

export default App;
