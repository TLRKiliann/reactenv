import FirstFrag from './components/FirstFrag';
import SecondFrag from './components/SecondFrag';
import ThirdFrag from './components/ThirdFrag';
import dataCatcher from './dataStruct/dataCatcher';
import './App.css';

function App() {
  const dataRetrieve = dataCatcher.map(item => {
    return <FirstFrag 
            key={item.id}
            id={item.id}
            name={item.name}
            age={item.age}
            admin={item.admin}
          />
    })
  return (
    <div className="App">
      <h1>Hello !</h1>
      <div className='retrieve--class'>
        {dataRetrieve}
      </div>
      <SecondFrag />
      <ThirdFrag />
    </div>
  );
}

export default App;
