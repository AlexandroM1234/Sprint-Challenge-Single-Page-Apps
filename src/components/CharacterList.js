import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        console.log(response.data.results);
        const characterFind = response.data.results.filter(character =>
          character.name.includes(query)
        );
        setCharacters(characterFind);
      });
  }, [query]);

  const newQuery = query => {
    setQuery(query);
  };

  return (
    <div>
      <SearchForm value={query} newQuery={newQuery} />
      <section className="character-list">
        {characters.map(character => {
          return <CharacterCard key={character.id} name={character.name} />;
        })}
      </section>
    </div>
  );
}
