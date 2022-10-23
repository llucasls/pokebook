import NavButton from './NavButton';

function NavBar() {
  return (
    <nav>
      <NavButton label="Home" path="/" />
      <NavButton label="Pokemon List" path="/pokemonlist" />
      <NavButton label="Details" path="/details" />
      <NavButton label="Routes" path="/routes" />
      <NavButton label="Moves" path="/moves" />
      <NavButton label="Evolutions" path="/evolutions" />
    </nav>
  );
}

export default NavBar;
