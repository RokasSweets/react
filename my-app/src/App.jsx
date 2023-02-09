import './App.scss';
import Animal from './components/jb/Animal.jsx';
import rand from './functions/rand.js'

function App() {
    


    const fox = <u>FOX number: {rand(100, 199)}</u>;

    const labas = <i>Labas</i>;


  return (
    <div className="App">
      <header className="App-header">
        <Animal animalName="Racoon" color="green" h1Class/>
        <Animal animalName="Fox" color="coral"/>
        <Animal animalName="Rabiit" color="yellow"/>
        {fox} {labas}
      </header>
    </div>
  );
}

export default App;
