# Getting Started with Create React App


## Keyboard

### event.keyCode (event.keyCode is for keyboard and it use unicode for character string)

For instance if you want to detect whether the "Enter"-key was clicked or not:

Instead of

event.keyCode === 13

Do it like

event.key === 'Enter'

---

```
<p>The keyCode property is deprecated, use the which property instead.</p>

<input type="text" size="40" onkeypress="myFunction(event)">

<p>"The Unicode value is:"</p>
<p id="demo"></p>

<script>
function myFunction(event) {
  let unicode= event.which;
  document.getElementById("demo").innerHTML = unicode;
}
</script>
```

---

## DrumApp.js n°84 :

***event.keyCode = unicode_number***
***k.key.charCodeAt(0) = unicode_number***

## return e.keyCode === k.key.charCodeAt(0) ? this.playPad(k.key) : "";

Get the Unicode of the first character in a string.

---

## Mouse

***mouse === keyboard***

### i.key === k.key

## return i.key === padKey

```
  handlePadClick(padKey, e) {
    this.playPad(padKey);
  }

  playPad(padKey) {
    //Faire correspondre la touche du DrumPad (padKey)
    //avec la clef (key) de musicData
    //et du titre du son joué et de l'URL.
    const audio = document.getElementById(padKey);
    const padDisplay = this.state.musicData.find((i) => {
      return i.key === padKey //i.key === k.key
   	})
   	...
  }
```

```
    this.setState((state) => {
      return {
      	...
        displayText: padDisplay
      };
    });
  }
```

```
  render() {
    const pads = this.state.musicData.map((item) => (
    	
      <DrumPad

        hotKey={item.key}
        
        soundTitle={item.soundTitle}
        ...
        
        soundFormat={this.state.urlLinkSound + item.soundFormat}
        clickHandler={this.handlePadClick}
      />
    return(
    	...
    );
  }
```

```
      <div
        id={this.props.soundTitle}

        key={this.props.hotKey}

        onClick={(e) => this.props.clickHandler(this.props.hotKey, e)}

        className="drum-pad"
      >
        <div className="drum-pad-label">
          <span>{this.props.hotKey}</span>
          <audio
            id={this.props.hotKey}
            className="clip"

            src={this.props.soundFormat}
          
          ></audio>
        </div>
      </div>
```

---
