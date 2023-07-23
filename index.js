function App() {
  const [text, setText] = React.useState('');

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