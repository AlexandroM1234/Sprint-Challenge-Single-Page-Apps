import React, { useState } from "react";
export default function SearchForm(props) {
  const [formState, setFormState] = useState("");
  const handleChange = event => {
    setFormState(`${event.target.value}`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.newQuery(formState);
  };
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="search"
          value={formState}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
    </section>
  );
}
