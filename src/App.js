import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Timer from './pages/Timer';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import IfOffline from './components/ifOnline';
import './App.css';

const history = createBrowserHistory();
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
history.listen(() => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

function App() {
  return (
    <Router history={history}>
      <div>
        <header>
          <Link to="/">Recetas <IfOffline>Offline</IfOffline></Link>
          <Link to='/timer' className='timerLink'>T</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/:recipeId" component={Recipe} />
          <Route path="/timer" component={Timer} />
        </main>
      </div>
    </Router>
  );
}

export default App;
