import Myfirst from './components/Myfirst'
import dataMyfirst from './components/dataMyfirst'
import Specialcomponent from './components/Specialcomponent'
import Mysecondspecial from './components/Mysecondspecial'
import Mylast from './components/Mylast'
import './App.css';

function App() {
  const titleHigh = 'One of my Project';
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
        <h1>{titleHigh}</h1>
      </header>
      <div className='div--myvar'>
        {myVar}
      </div>
      <div className='special--div'>
        <Specialcomponent style={{color:'red'}} tweek={'tweeky'}/>
      </div>
      <div className='mythird--div'>
        <Mylast />
      </div>
      <div className='mysecspecial--div'>
        <Mysecondspecial />
      </div>
    </div>
  );
}

export default App;
