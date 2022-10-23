import NavButton from './NavButton';

function NavBar() {
  return (
    <nav>
      <NavButton label="Home" path="/" />
      <NavButton label="Pokemon List" path="/pokemonlist" />
      <NavButton label="Details" path="/" />
      <NavButton label="Routes" path="/" />
      <NavButton label="Moves" path="/" />
      <NavButton label="Evolutions" path="/" />
    </nav>
  );
}

export default NavBar;
