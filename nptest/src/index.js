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
  const createel = React.createElement('h3', {},
    "I'm const createel (first one in function)")
  const callData = allData.map(item => {
    return (
      <h3 className="div--item">
        id = { item.id + ' / ' } 
        name = { item.name + ' / ' } 
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
        <Fourth />
        <Fourth />
        {createel}
        <Fourth />
        {createel}
        <Fourth />
        {createel}
        {createel}
        {createel}
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
  return <h3 style={{color:'purple', marginTop:'20px'}}>Hey my h3 with style color</h3>
}

const Thirdtest = () => {
  return (
    <h4 className='class--h4'>
      I'm the h4 Tag !!!
    </h4>
  )
}

//React.createElement()
//Return with parenthesis
const Fourth = () => {
  return (
    React.createElement('div', {},
    React.createElement('p', {}, "I'm const Fourth (second one) !"))
  );
}

//Return without parenthesis
const Element = () => {
  return React.createElement('h3', {}, "I'm const Element (last one) !")
}

//<React.StrictMode />
ReactDOM.render(<React.StrictMode><Tester /></React.StrictMode>,
  document.getElementById('root'));