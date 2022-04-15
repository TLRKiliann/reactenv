import React from 'react';
import {useState, useEffect} from 'react';
import {actionName, actionPass} from './actions';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {
  const [entryName, setEntryName] = useState('');
  const [entryPass, setEntryPass] = useState('');

  const addName = useSelector(state => state.addName);
  const addPass = useSelector(state => state.addPass);
  const dispatch = useDispatch(entryName, entryPass);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('Pseudo'));
    setEntryName(storage)
    const passStore = JSON.parse(localStorage.getItem('Passwd'));
    setEntryPass(passStore)
  }, [])

  useEffect(() => {
    localStorage.setItem('Pseudo', JSON.stringify(addName));
    localStorage.setItem('Passwd', JSON.stringify(addPass));
  }, [addName, addPass])

  const handleClick = () => {
    dispatch(actionName(entryName))
    setEntryName('')
    dispatch(actionPass(entryPass))
    setEntryPass('')
  }

  return (
    <div className="App">
      <div className='reorder--app'>
        <h1>Sign In</h1>
        <h3>{addName}</h3>
        <h3>{addPass}</h3>

        <input type='text' value={entryName} onChange={(e) => setEntryName(e.target.value)} placeholder='pseudo'/>

        <input type='text' value={entryPass} onChange={(e) => setEntryPass(e.target.value)} placeholder='passwd'/>
          
        <button onClick={handleClick}>Login</button>
      </div>

    </div>
  );
}

export default App;
