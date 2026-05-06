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

  const changeInputHandler = (event) => {
    const target = event.target;
    const targetValue = target.value;

    setSelectedGenre(targetValue);
  }

  return (
    <>
      <select
        className="form-select"
        value= {selectedGenre}
        onChange={changeInputHandler}
      >
        <option value="" disabled>Scegli il genere</option>

        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </>
  );
}
export default App;
