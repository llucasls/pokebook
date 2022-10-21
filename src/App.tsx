import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <p>
          <img
            alt="Squirtle happily walking with arms and legs wide open"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
          />
          <br />
          Welcome!
        </p>
        { Array(12).fill(0).map((_, index) => (<PokemonCard id={index + 1} key={index + 1} />)) }
      </main>
    </div>
  );
}

export default App;
