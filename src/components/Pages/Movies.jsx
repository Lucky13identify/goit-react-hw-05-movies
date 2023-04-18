import { useState, useEffect } from 'react';
import { AiOutlineKey } from 'react-icons/ai';

import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import FilmDetails from '../Pages/FilmDetails';
import { Button, Form, Input } from '../PagesStyles/Movies.styled';
import { UlList } from '../PagesStyles/Home.styled';
import getFilmsList from '../../services/FilmsAPI';

function Movies() {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
      getFilmsList('search/movie', `&query=${searchParams.get('query')}`).then(
        result => {
          setFilms(result.results);
        }
      );
    }
  }, [searchParams]);

  const submitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Input type="text" />
        <Button type="button">
          <AiOutlineKey />
        </Button>
      </Form>
      <UlList>
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
      </UlList>
    </div>
  );
}

export default Movies;
