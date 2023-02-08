import './App.css';
import Cat from './components/006/Cat';
import Racoon from './components/006/Racoon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Racoon></Racoon>
        <Racoon/>
        <Cat/>
      </header>
    </div>
  );
}

export default App;
