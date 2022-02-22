import React, {useState, useEffect} from 'react'

export default function Effects() {
  const [count, setCount] = useState(0);
  const [secCount, setSecount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  useEffect(() => {
    console.log(`You have clicked the second button ${secCount} times`)
  }, [secCount]);

  return (
    <div className='main--effect'>
        <p>Look at the console !!! (F12 or Inspect)</p>
      <div className='btn--effect'>
        <button
          onClick={() => setCount(count + 1)}
          style={{padding: '10px 10px'}}
        >
          Click me (1)
        </button>
        <button
          onClick={() => setSecount(secCount + 1)}
          style={{padding: '10px 10px'}}
        >
          Click me (2)
        </button>
      </div>
    </div>
  );
}