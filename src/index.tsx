import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Construction from './pages/Construction';
import PokemonDetails from './pages/PokemonDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/pokemonlist" element={ <PokemonList /> } />
        <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
        <Route path="/details" element={ <Construction /> } />
        <Route path="/routes" element={ <Construction /> } />
        <Route path="/moves" element={ <Construction /> } />
        <Route path="/evolutions" element={ <Construction /> } />
        <Route path="/404" element={ <NotFound /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
