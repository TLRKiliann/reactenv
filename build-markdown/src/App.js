import React from 'react';
import { marked } from 'marked';
// or const { marked } = require('marked');
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const initialState = `
  This is a paragraph

  # Heading
  ## Heading 2

  [website](https://avatars.githubusercontent.com/u/84546757?s=200&v=4)

  this is an inline \`<div></div>\`

  > a blockquote 

  this is a block of code

  \`\`\`

    let x = 1;
    let y = 2;
    let z = x + y;

  \`\`\`

  - list item 1
  - list item 2
  - list item 3

  ![React](https://avatars.githubusercontent.com/u/84546757?s=200&v=4)

  **this is bolder text**
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
    const inputStyle = {
      width: "580px",
      height: "100vh",
      marginRight: "auto",
      marginLeft: "20px",
      padding: "10px",
    };
    const outputStyle = {
      width: "580px",
      height: "100vh",
      backgroundColor: "#dcdcdc",
      marginRight: "20px",
      marginLeft: "auto",
      padding: "10px",
    };
    return (
      <div className="App">
        <h2 className='text-center mt-2'>Markdown Preview</h2>

        <div className='row mt-4'>
        
          <div className='col-md-6'>
            <h4 className='col text-center'>Markdown</h4>
            <textarea
              style={inputStyle}
              className='form-control'
              id='editor'
              value={text}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className='col-md-6'>
            <h4 className='col text-center'>Preview</h4>
            <div
              style={outputStyle}
              className='form-control'
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
