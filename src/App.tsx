import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/good"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goods
        </a>
        <Link
          className="App-link"
          to="good"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goods
        </Link>
      </header>
    </div>
  );
}

export default App;
