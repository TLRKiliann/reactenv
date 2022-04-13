# JS-JSX-Calculator

## Other manners :

---

### Display value :

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      ...
    }

    this.handleDecimal = this.handleDecimal.bind(this);
    ...
  }
  handleClick() {
    const value = e.target.value;
    this.setState(state => ({result: state.result += value}))
  }
  ...

  render() {
    return(
      <button id='one' value={'1'} onClick={(e) => this.handleClick(e)}>1</button>
    )
  }
}
```


### With add :

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      add: '+'
    }

  this.add = this.add.bind(this);
  ...
  
  } 

  add() {
    this.setState(state => ({result: state.result + state.add}));
  }
  ...

  render() {
    return(
      <button id='add' onClick={this.add}>+</button>
    )
  }
}
```

---

### With decimal digit :

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      count: 0
    }

  this.handleDecimal = this.handleDecimal.bind(this);
  ...
  }  

  handleDecimal(e) {
    if (this.state.count === 0) {
      this.setState(state => ({result: state.result += state.decimal}))
    } else {
      this.setState(state => ({result: state.result}))
    }
    this.setState(state => ({count: state.count + 1}))
    //or this.state.count += 1;
    e.preventDefault();
  }
  ...

  render() {
    return(
      <button id='decimal' onClick={(e) => this.handleDecimal(this.state.count, e)}>.</button>
    );
  }
}
```

---
