import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Timer from './pages/Timer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Recetass</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/:recipeId" component={Recipe} />
          <Route path="/timer" component={Timer} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
