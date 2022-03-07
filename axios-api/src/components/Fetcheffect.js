import React from 'react'
import {useState} from 'react'
//import {useEffect} from 'react'


export default function Effectfunction() {
  const [todo, setTodo] = useState('Blue');
  const [butt, setButt] = useState();
  const [fetcher, setFetcher] = useState({});

  const handleServer = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((object) => (
        setFetcher(object)
      ))
      .catch((error) => console.log(error))
  };

  const handleChange = () => {
    setButt(prevent => !prevent)
  };

  return (
    <div>
      {butt && <p>Hello : {todo}</p>}
      {!butt && <p>Hello : {setTodo ? 'Red' : 'Blue'}</p>}
      
      <p>JSON.stringify... : {JSON.stringify(fetcher)}</p>

      <p>{fetcher.id}</p>
      <p>{fetcher.title}</p>
      <p>{fetcher.completed ? 'true' : 'false'}</p>

      <button onClick={handleChange}>{butt ? 'Green' : 'Orange'}</button>
      <button onClick={handleServer}>Start server</button>
    </div>
  );
}