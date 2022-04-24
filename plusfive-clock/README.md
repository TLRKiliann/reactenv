### npm start

# 25+5 clock

---

## audio with jQuery !

```
  playAudio = () => {
    $('#beep').trigger('load');
    $('#beep').trigger('play');
    //let audio = document.getElementById(id);
    //audio.play();
  }

  stopAudio = () => {
    $('#beep').trigger('pause');
    $('#beep').prop("currentTime",0);
    //let newaudio = document.getElementById(id);
    //newaudio.pause();
    //newaudio.load();
    //newaudio.currentTime = 0;
    //console.log("stop audio", newaudio.currentTime);
  }
```

---

## render with multiple calls !

```
  render () {
    // render was made for multiple calls !
    const { breakLength, sessionLength, mainTitle, counterClock, isRunning } = this.state;
    const formatMMSS = (count) => {
      let minutes = Math.floor(count / 60);
      let seconds = count % 60;
      minutes = minutes < 10 ? ('0' + minutes) : minutes;
      seconds = seconds < 10 ? ('0' + seconds) : seconds;
      return `${minutes}:${seconds}`;
    }
```

---

## Sizing with react-icons

`<BiReset className="fas fa-sync" size={28} />`

---

