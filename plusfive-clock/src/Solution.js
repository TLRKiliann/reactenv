const { useState, useEffect } = React

function App() {
  const [buttons, setButtons] = useState({
    'start_stop': '▶',
    'reset': '⭯',
    'pause': '||',
    'break-increment': '↑',
    'break-decrement': '↓',
    'session-increment': '↑',
    'session-decrement': '↓'
  })

  const MAX_LENGTH = 60
  const MIN_LENGTH = 1

  let status = 'reset' // start, pause, reset
  let minutes = 25
  let seconds = 0
  let timeLeft = '25:00'
  let breakLength = 5
  let sessionLength = 25
  let timerLabel = 'Session' // Session, Break
  let currInterval = null

  // use getElementById instead of setButtons
  // to pass test suite
  const updateElement = (element, str) => {
    document.getElementById(element).innerHTML = str
  }

  const updateElementTimeLeft = () => {
    timeLeft = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    updateElement('time-left', timeLeft)
  }

  const playAudio = (id) => {
    document.getElementById(id).play()
  }

  const stopAudio = (id) => {
    let audio = document.getElementById(id)
    audio.pause()
    audio.currentTime = 0
  }

  const incrementBreakLength = () => {
    if (breakLength === MAX_LENGTH) { return }
    breakLength++
    if (timerLabel === 'Break') {
      minutes = breakLength
      seconds = 0
    }
    updateElement('break-length', breakLength)
  }

  const decrementBreakLength = () => {
    if (breakLength === MIN_LENGTH) { return }
    breakLength--
    if (timerLabel === 'Break') {
      minutes = breakLength
      seconds = 0
    }
    updateElement('break-length', breakLength)
  }

  const incrementSessionLength = () => {
    if (sessionLength === MAX_LENGTH) { return }
    sessionLength++
    if (timerLabel === 'Session') {
      minutes = sessionLength
      seconds = 0
    }
    updateElement('session-length', sessionLength)
  }

  const decrementSessionLength = () => {
    if (sessionLength === MIN_LENGTH) { return }
    sessionLength--
    if (timerLabel === 'Session') {
      minutes = sessionLength
      seconds = 0
    }
    updateElement('session-length', sessionLength)
  }

  const timer = () => {
    return setInterval(() => {
      if (timeLeft === '00:00') {
        playAudio('beep')
        if (timerLabel === 'Session') {
          minutes = breakLength
          timerLabel = 'Break'
        } else if (timerLabel === 'Break') {
          minutes = sessionLength
          timerLabel = 'Session'
        }
        seconds = 0
        updateElement('timer-label', timerLabel)
      } else if (seconds === 0) {
        minutes--
        seconds = 59
      } else {
        seconds--
      }
      updateElementTimeLeft()
    }, 1000)
  }

  const handleChange = (e) => {
    const id = e.target.id

    if (id === 'start_stop') {
      status = status === 'start' ? 'pause' : 'start'
      if (status === 'start') {
        currInterval = timer()
        updateElement('start_stop', buttons.pause)
      } else if (status === 'pause') {
        clearInterval(currInterval)
        updateElement('start_stop', buttons.start_stop)
      }
    } else if (id === 'reset') {
      clearInterval(currInterval)
      status = 'reset'
      timerLabel = 'Session'
      breakLength = 5
      sessionLength = 25
      minutes = sessionLength
      seconds = 0
      updateElementTimeLeft()
      updateElement('break-length', breakLength)
      updateElement('session-length', sessionLength)
      updateElement('timer-label', timerLabel)
      stopAudio('beep')
    }

    if (status === 'start') { return }

    if (id === 'break-increment') {
      incrementBreakLength()
    } else if (id === 'break-decrement') {
      decrementBreakLength()
    } else if (id === 'session-increment') {
      incrementSessionLength()
    } else if (id === 'session-decrement') {
      decrementSessionLength()
    }

    updateElementTimeLeft()
  }

  const Buttons = (props) => {
    return (
      <div className='inline'>
        {[...props.btns].map(id =>
          <button
            className='btn default'
            id={id}
            onClick={e => {handleChange(e)}}>
            {buttons[id]}
          </button>
        )}
      </div>
    )
  }

  return (
    <div id='clock'>
      { // Layout based on https://codepen.io/reavenclaw/pen/yLMjrMR
      }
      <main className='min-h-screen min-w-screen p-4 text-gray-400 flex'>
        <div className='btn-pad-bg bg-black m-auto max-w-screen-lg rounded-lg grid md:grid-cols-1 grid-cols-1'>
          <div className='p-12'>
            <div style={{textAlign: 'center'}} id='title'>25 + 5 Clock</div>
            <h1 id="time-left" className="text-4xl font-bold mb-8 text-white"
              style={{width: '295px', textAlign: 'center'}}>
              {timeLeft}
            </h1>
            <audio
              className='clip'
              id='beep'
              src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
              />
            <div style={{textAlign: 'center'}} id="timer-label">{timerLabel}</div>
            <div>
              <Buttons btns={[
                'break-increment',
                'break-decrement',
                'start_stop',
                'reset',
                'session-increment',
                'session-decrement'
              ]} />
            </div>
            <div id='session-label' style={{float: 'right'}}>
              Session Length: <p id="session-length">{sessionLength}</p>
            </div>
            <div id='break-label'>
              Break Length: <p id="break-length">{breakLength}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))