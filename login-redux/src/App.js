import React from 'react';
import {useState, useEffect} from 'react';
import {actionName, actionPass} from './actions';
import {useSelector, useDispatch} from 'react-redux';
//import { FaBeer } from 'react-icons/fa';
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
      <p className="first"></p>
      <p className="second"></p>
      <p className="third"></p>
      <p className="fourth"></p>
      <div className='reorder--app'>
        <h1>Sign In</h1>
        <h3>{addName}</h3>
        <h3>{addPass}</h3>

        <div className='main--divinput'>
          <div className='input--div'>
            <h4>Pseudo : </h4>
            <input
              type='text'
              value={entryName}
              onChange={(e) => setEntryName(e.target.value)}
              placeholder='pseudo'
            />
          </div>
          <div className='input--div'>
            <h4>Password : </h4>
            <input
              type='text'
              value={entryPass}
              onChange={(e) => setEntryPass(e.target.value)}
              placeholder='passwd'
            />
          </div>
        </div>
          
        <button onClick={handleClick}>Login</button>
      </div>

    </div>
  );
}

export default App;
