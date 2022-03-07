import React from 'react'
import {useState} from 'react'
//import {useEffect} from 'react'


export default function Effectfunction() {
  const [todo, setTodo] = useState('');
  const [butt, setButt] = useState();
  const [myApp, setMyApp] = useState(false);
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
    setMyApp(prevApp => !prevApp)
  };

  return (
    <div>
      {butt && <p
        style={{color: myApp ? 'white' : 'yellow', backgroundColor: myApp ? 'red' : 'blue'}}
      >
        Hello : {todo ? 'Blue' : 'Red'}
      </p>}
      {!butt && <p
        style={{color: myApp ? 'white' : 'yellow', backgroundColor: myApp ? 'red' : 'blue'}}
      >
        Hello : {setTodo ? 'Blue' : 'Red'}
      </p>}

      
      <p>JSON.stringify... : {JSON.stringify(fetcher)}</p>

      <p>id : {fetcher.id}</p>
      <p>title (json-string) : {JSON.stringify(fetcher.title)}</p>
      <p>completed : {fetcher.completed ? 'true' : 'false'}</p>

      <button
        onClick={handleChange}
        style={{backgroundColor: myApp ? 'lightgreen' : 'orange'}}
      >
        {butt ? 'lightgreen' : 'orange'}
        </button>

      <button onClick={handleServer}>Start server</button>
    </div>
  );
}