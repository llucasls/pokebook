import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
  return (
    <div className="App">
      <main className="App-header">
        <p>
          <Link to="/pokemonlist">
            <img
                alt="Squirtle happily walking with arms and legs wide open"
                src="squirtle.svg"
            />
          </Link>
          <br />
          Welcome!
        </p>
      </main>
    </div>
  );
}

export default Home;
