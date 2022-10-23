import NavBar from '../components/NavBar';

function NotFound() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <img
          src="sadPikachu.jpg"
          alt="pikachu with lowered ears and a sad face, looking disappointed"
        />
        <h3>The page you were looking for does not exist</h3>
      </main>
    </div>
  )
}

export default NotFound;
