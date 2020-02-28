import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/characterlist">Characters</Link>
      </Router>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
