import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

function FilmDetails() {
  const [film, setFilm] = useState([]);
  const [genresFilm, setGenresFilm] = useState([]);
  const { filmId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=d67ee4551789dee73b6dc07167e48b8f`
      )
      .then(result => {
        setFilm(result.data);
        setGenresFilm(result.data.genres);
      });
  }, [filmId]);

  const { original_title, vote_average, overview } = film;
  return (
    <div>
      <NavLink to={location.state.from}>Go back</NavLink>
      <img src="" alt="" />
      <h1>{original_title}</h1>
      <p>Vote: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genresFilm.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={`/movies/${filmId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${filmId}/rewievs`}>Rewievs</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default FilmDetails;
