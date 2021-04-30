import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, About, Users, Login, Registration } from "./pages";
import "../src/main.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>DASHBOARD ADMIN</p>
      </header>
      <Router>
        <div className="header">
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Register</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <div>Not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
