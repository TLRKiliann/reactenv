import React, {useState, useEffect} from 'react'

export default function Effects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
    <div className='div--count'>
    	<p>Look at the console !!! (F12 or Inspect)</p>
      <button
      	onClick={() => setCount(count + 1)}
      	style={{padding: '10px 10px'}}
      >
      	Click me (1)
      </button>
      <button
      	onClick={() => setCount2(count2 + 1)}
      	style={{padding: '10px 10px'}}
      >
      	Click me (2)
      </button>
    </div>
  );
}