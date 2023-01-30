import NavButton from '../NavButton';
import "./style.css";

function NavBar() {
  return (
    <nav>
      <div>
        <NavButton label="Home" path="/" />
        <NavButton label="Pokemon List" path="/pokemonlist" />
        <NavButton label="Details" path="/details" />
        <NavButton label="Routes" path="/routes" />
        <NavButton label="Moves" path="/moves" />
        <NavButton label="Evolutions" path="/evolutions" />
      </div>
    </nav>
  );
}

export default NavBar;
