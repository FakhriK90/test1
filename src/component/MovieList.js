import React, { useState } from "react";

function MovieForm  ({onClientAdd})  {
  const [newMovie, setNewMovie] = useState ("")
  

  const handleChange = event => {
    setNewMovie (event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom =newMovie;

    onClientAdd({ id, nom });

    setNewMovie("");
  };

    return (
      <div className="sub">
        <form onSubmit={handleSubmit}>
        <input
          value={newMovie}
          onChange={handleChange}
          type="text"
          placeholder="Add new movie"
        />
        <button>Submit</button>
        </form>
      </div>
    );
    }


export default MovieForm;
