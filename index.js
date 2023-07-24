function App() {
  const [text, setText] = React.useState('');

  const drumClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: "Kick",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: "Closed-HH",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ];

  React.useEffect(() => {

  }, []);

  return (
    <div id="drum-container">
      <div id="drum-machine" className="mx-auto text-center">
        <h4 id="title">Drum Machine</h4>
        <h6 id="subTitle">By Randolph Dy</h6>
        <div id="display">

        </div>
        <div id="drumPadContainer" className="row">
          <div className="drum-pad col-4" id="Q">Q
            <audio src="" className="clip"></audio>
          </div>
          <div className="drum-pad col-4" id="W">W</div>
          <div className="drum-pad col-4" id="E">E</div>
          <div className="drum-pad col-4" id="A">A</div>
          <div className="drum-pad col-4" id="S">S</div>
          <div className="drum-pad col-4" id="D">D</div>
          <div className="drum-pad col-4" id="Z">Z</div>
          <div className="drum-pad col-4" id="X">X</div>
          <div className="drum-pad col-4" id="C">C</div>
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);