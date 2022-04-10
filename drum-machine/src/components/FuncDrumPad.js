


function DrumPad({ clip }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase())
    })
    //return () => {
      //document.removeEventListener("keydown", handleKeyPress)
  }, []);

  const playSound = (selector) => {
    const audioTag = document.getElementById(selector);
    console.log(audioTag)
    audioTag.currentTime = 0;
    audioTag.play();
    setActive(selector);
  };

  return(

    <div id='display'>
      <div className={`drum-pads ${active && "btn-warning"}`}>
        {audioClip.map(clip => (
          <div
            key={clip.url}
            onClick={() => {
              playSound(clip.keyTrigger)
            }}
            className='drum-pad'
            id={clip.url}
          >
            {clip.keyTrigger}
        <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      </div>
      ))}
    </div>
  );
}

export default DrumPad;
