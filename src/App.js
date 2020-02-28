import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/">
        <WelcomePage />
      </Route>
      <Route path="/characterlist">
        <CharacterList />
      </Route>
    </main>
  );
}
