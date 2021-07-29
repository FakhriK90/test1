import React, { useState } from "react";

import './App.css';
import Movie from "./component/Movie";
import MovieCard from './component/MovieCard';
import MovieForm from "./component/MovieList";
import NavBar from './component/NavBar';

const App =() => {
  const [movies, setMovies] = useState([
      { id: 1, nom: "Avengers: Infinity War" },
      { id: 2, nom: "San Andreas" },
      { id: 3, nom: "Volcano" },
      { id: 4, nom: "21 Jump Street" },
      { id: 5, nom: "Sherlock Holmes" },
      { id: 6, nom: "Pirates of the Caribeen: The curse of the Black Purle" },
      { id: 7, nom: "The Hunger Games: Catching Fire" },
      { id: 8, nom: "The Mask" }
  ])


  

  const handleAdd = movie => {
    const updatedMovies = [...movies];
    updatedMovies.push(movie);

    setMovies(updatedMovies);
  };
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <h1> Movies </h1>
      <MovieCard />
      <div>
        <h1> Movies List</h1>
      <ul>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              details={movie}              
            />
          ))}
        </ul>
        <MovieForm onClientAdd={handleAdd} />
      </div>
      </main>
    </div>
  );
}

export default App;
