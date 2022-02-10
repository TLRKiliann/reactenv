import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Tester.css'


const allData = [
  {
    id: 1,
    name: 'Jamic',
    age: 29
  },
  {
    id: 2,
    name: 'Rosa',
    age: 24
  },
  {
    id: 3,
    name: 'Simone',
    age: 33
  }
];


function Tester() {
  const Createel = React.createElement('h3', {}, 'I love you (from object)!')
  const callData = allData.map(item => {
    return (
      <h3 className="div--item">
        id = { item.id + ' ' } 
        name = { item.name + ' '} 
        age = { item.age } 
      </h3>
    )
  });
  return (
    <div className='main--div'>
      <div className='div--nav'>
        <nav>
          <ul>
            <li>
              <a href='#'>test_1</a>
            </li>
            <li>
              <a href='#'>test_2</a>
            </li>
            <li>
              <a href='#'>test_3</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='div--fourth'>
        <Secondtest />
        <Thirdtest />
        <Fourth />
        {Createel}
        <div className='data--div'>
          { callData }
        </div>
        <Element />
      </div>
    </div>
  );
}

//Style format
const Secondtest = () => {
  return <h3 style={{color:'purple', marginTop:'20px'}}>Hey my h3</h3>
}

const Thirdtest = () => {
  return (
    <h4 className='class--h4'>
      Ho h4 !!
    </h4>
  )
}

//React.createElement()
//Return with parenthesis
const Fourth = () => {
  return (
    React.createElement('div', {},
    React.createElement('p', {}, "ok let's fuck"))
  );
}

//Return without parenthesis
const Element = () => {
  return React.createElement('h3', {}, 'I love you (from function arrow)!')
}

//<React.StrictMode />
ReactDOM.render(<React.StrictMode><Tester /></React.StrictMode>,
  document.getElementById('root'));