import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import getFilmsList from '../../services/FilmsAPI';
import FilmDetails from '../Pages/FilmDetails';

// const FilmDetails = lazy(() => import('../Pages/FilmDetails'));

function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getFilmsList('week').then(result => setFilms(result.results));
  }, []);
  //   console.log(films.map(film => console.log(film)));
  return (
    <ul>
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
    </ul>
  );
}

export default Home;
