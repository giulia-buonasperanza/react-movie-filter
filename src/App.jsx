import { useState } from "react";
import { useEffect } from "react";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
  { title: 'Harry Potter e la Pietra Filosofale', genre: 'Fantasy' },
  { title: 'Il Signore degli Anelli', genre: 'Fantasy' },
  { title: 'La Bella e la Bestia', genre: 'Fantasy' },
  { title: 'Matrix', genre: 'Fantascienza' },
  { title: 'Il Silenzio degli Innocenti', genre: 'Thriller' },
  { title: 'La La Land', genre: 'Romantico' },
]

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [moviesByGenre, setMoviesByGenre] = useState(movies);
  const [searchMovies, setSearchMovies] = useState("");
  const [newMovie, setNewMovie] = useState({ title: "", genre: "" });
  const [allMovies, setAllMovies] = useState(movies);


  const changeInputHandler = (event) => {
    const target = event.target;
    const targetValue = target.value;
    const targetName = target.name;

    if (targetName === "search") {
      setSearchMovies(targetValue);
    } else if (targetName === "genre") {
      setSelectedGenre(targetValue);
    };
  };

  useEffect(() => {
    const moviesFiltered = allMovies.filter(movie => {

      const genreMatch = selectedGenre === "" || movie.genre === selectedGenre;
      const titleMatch = searchMovies === "" ||
        movie.title.toLowerCase().includes(searchMovies.toLowerCase());

      return genreMatch && titleMatch;
    }
    );

    setMoviesByGenre(moviesFiltered);
  }, [selectedGenre, searchMovies]);


    const newInputHandler = (event) => {
      const target = event.target;
      const targetValue = target.value;
      const targetName = target.name;

      setNewMovie({
        ...newMovie,
        [targetName]: targetValue,
      });
    };

    const addMovieHandler = (event) => {
      event.preventDefault();

      const movieToAdd = {
        title : newMovie.title,
        genre : newMovie.genre
      };

      setMoviesByGenre([...movies, movieToAdd]);
      setAllMovies([...allMovies, movieToAdd]);

      setNewMovie({ title: "", genre: "" });

    };


      return (
        <div className="container">
          <h3 className="m-3">Seleziona Genere</h3>
          <select
            className="form-select m-3"
            value={selectedGenre}
            onChange={changeInputHandler}
            name="genre">
            <option value="">Film</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
            <option value="Fantasy">Fantasy</option>
          </select>

          <div className="m-3">
            <h3>Cerca Film</h3>
            <input type="text" value={searchMovies}
              onChange={changeInputHandler}
              name="search" />
          </div>

          <ul>
            {moviesByGenre.map((movie, index) => { //Giuro che non lo faccio più
              return <li key={index}>{movie.title}</li>
            })}
          </ul>

          <div className="m-3">
            <h3>Aggiungi Film</h3>
            <form onSubmit={addMovieHandler}>
              <div className="mb-3">
                <label htmlFor="movieTitle" className="form-label"> Nome del film </label>
                <input
                  type="text"
                  className="form-control"
                  id="movieTitle"
                  placeholder="Inserisci il titolo del film"
                  value={newMovie.title}
                  onChange={newInputHandler}
                  name = "title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="movieGenre" className="form-label"> Genere </label>
                <select className="form-select"
                  id="movieGenre"
                  value={newMovie.genre}
                  onChange={newInputHandler}
                  name="genre">
                  <option value="" disabled> Seleziona un genere </option>
                  <option value="Fantascienza">Fantascienza</option>
                  <option value="Thriller"> Thriller </option>
                  <option value="Romantico">Romantico</option>
                  <option value="Azione">Azione</option>
                  <option value="Fantasy">Fantasy</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary"> Aggiungi Film</button>
            </form>
          </div>
        </div>

      );
    }
    export default App;
