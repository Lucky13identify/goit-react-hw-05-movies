import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Movies from '../Pages/Movies';
import { HeaderHat, NavLi } from './Header.styled';
import styled from 'styled-components';
// import Home from '../Pages/Home';
// import FilmDetails from '../Pages/FilmDetails';
// import Cast from '../Pages/Cast';
// import Rewievs from '../Pages/Rewievs';
// const Movies = lazy(() => import('../Pages/Movies'));
const Cast = lazy(() => import('../Pages/Cast'));
const Rewievs = lazy(() => import('../Pages/Rewievs'));
const Home = lazy(() => import('../Pages/Home'));
const FilmDetails = lazy(() => import('../Pages/FilmDetails'));

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: crimson;
  }
`;

function Header() {
  return (
    <>
      <HeaderHat>
        <NavLi>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavLi>
      </HeaderHat>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:filmId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Rewievs />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default Header;
