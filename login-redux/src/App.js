import React from 'react';
import {useState, useEffect} from 'react';
import {actionName, actionPass} from './actions';
import {useSelector, useDispatch} from 'react-redux';
import { AiFillApi, AiFillCodepenCircle } from 'react-icons/ai';
import { FaGithub, FaFreeCodeCamp, FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import './App.css';
import Planet from "../src/images/ourplanet.jpg";
import Saturne from "../src/images/Saturne.jpg";

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
    <div className='allinone'>

      <div id="div--planet">
        <img src={Planet} className='earth--class' alt="myplanet"></img>
      </div>

      <div id="div--saturne">
        <img src={Saturne} className='saturne--class' alt="sat"></img>
      </div>

      <div className='main--app'>

        <div className="App">

          <p className="first"></p>
          <p className="second"></p>
          <p className="third"></p>
          <p className="fourth"></p>
          <p className="fifth"></p>
          <p className="sixth"></p>
          <p className="seven"></p>

          <div className='reorder--app'>

            <div className='main--divinput'>
          
              <h1>Sign In</h1>
              <h3>{addName}</h3>
              <h3>{addPass}</h3>
              <div className='input--div1'>
                <h4 id="ps-div">Pseudo : </h4>
                <input
                  type='text'
                  value={entryName}
                  onChange={(e) => setEntryName(e.target.value)}
                  placeholder='pseudo'
                />
              </div>
              <div className='input--div2'>
                <h4 id="pw-div">Password : </h4>
                <input
                  type='text'
                  value={entryPass}
                  onChange={(e) => setEntryPass(e.target.value)}
                  placeholder='passwd'
                />
              </div>
            </div>
            
            <button onClick={handleClick}>
              <p>Login</p>
              <AiFillApi size={28} style={{"color":"white"}} />
            </button>
          
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="unit--icon">
          <FaGithub size={42} />
        </div>
        <div className="unit--icon">
          <FaFreeCodeCamp size={42} />
        </div>
        <div className="unit--icon">
          <AiFillCodepenCircle size={42} />
        </div>
        <div className="unit--icon">
          <FaReact size={42} />
        </div>
        <div className="unit--icon">
          <SiRedux size={42} />
        </div>
      </div>
    </div>
  );
}

export default App;
