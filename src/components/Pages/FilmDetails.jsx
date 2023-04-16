import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  ContainerDiv,
  MainDiv,
  ContainerDivInfo,
  Genres,
  Head,
  Additional,
  CastRew,
} from '../PagesStyles/FilmDetails.styled';

function FilmDetails() {
  const [film, setFilm] = useState([]);
  const [genresFilm, setGenresFilm] = useState([]);
  const { filmId } = useParams();
  const location = useLocation();

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

  const { original_title, vote_average, overview, poster_path } = film;
  return (
    <MainDiv>
      <NavLink to={location.state?.from ?? '/'}>Go back</NavLink>

      <ContainerDiv>
        <img
          src={`https://www.themoviedb.org/t/p/w300/${poster_path}`}
          alt=""
        />
        <ContainerDivInfo>
          <h1>{original_title}</h1>
          <p>Vote: {vote_average}</p>
          <Head>Overview</Head>
          <p>{overview}</p>
          <Head>Genres</Head>
          <Genres>
            {genresFilm.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </Genres>
        </ContainerDivInfo>
      </ContainerDiv>
      <Additional>Additional information</Additional>
      <CastRew>
        <li>
          <NavLink to={`/movies/${filmId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${filmId}/rewievs`}>Rewievs</NavLink>
        </li>
      </CastRew>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainDiv>
  );
}

export default FilmDetails;
