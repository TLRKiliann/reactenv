import React from 'react';
import { marked } from 'marked';
// or const { marked } = require('marked');
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const initialState = `
  This is a paragraph

  # Heading
  ## Heading 2
  ### Heading 3

  - list item 1
  - list item 2
  - list item 3

  [visit my website](https://avatars.githubusercontent.com/u/84546757?s=200&v=4)

  this is an inline \`<div></div>\`

  this is a block of code

  \`\`\`

  let x = 'yes';

  \`\`\`

  ![React](https://avatars.githubusercontent.com/u/84546757?s=200&v=4)

  ***this is bolder text***
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }
  render() {
    const { text } = this.state;

    const markdown = marked(text, {breaks: true});

    return (
      <div className="App">
        <h2 className='text-center m-4'>Title</h2>

          <div className='col-6'>
            <h6 className='text-center'>Cool</h6>
            <textarea
              className='form-control p-2' rows='12'
              id='editor'
              value={text}
              onChange={(e) => this.handleChange(e)}
            />

            <h6 className='text-center'>See result</h6>
            <div className='col-6' id='preview'>
              <div 
                className='form-control p-2' 
                dangerouslySetInnerHTML={{__html: markdown}}
                id='preview'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
