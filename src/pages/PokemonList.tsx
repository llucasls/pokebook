import '../App.css';
import PokemonCard from '../components/PokemonCard';

function PokemonList() {
  return (
    <div className="App">
      <main className="App-header">
        { Array(12).fill(0).map((_, index) => (<PokemonCard id={index + 1} key={index + 1} />)) }
      </main>
    </div>
  );
}

export default PokemonList;
