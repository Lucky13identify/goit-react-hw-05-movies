import { useState } from 'react';

import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import axios from 'axios';
import FilmDetails from '../Pages/FilmDetails';

function Movies() {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const submitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d67ee4551789dee73b6dc07167e48b8f&query=${e.target[0].value.trim()}`
      )
      .then(result => {
        setFilms(result.data.results);
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" />
        <button type="button"></button>
      </form>

      {films.map(({ title, id }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
          <Routes>
            <Route path="/movies" element={<FilmDetails />} />
          </Routes>
        </li>
      ))}
    </div>
  );
}

export default Movies;
