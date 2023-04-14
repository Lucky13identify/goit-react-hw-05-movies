import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Movies from '../Pages/Movies';
// import Home from '../Pages/Home';
// import FilmDetails from '../Pages/FilmDetails';
// import Cast from '../Pages/Cast';
// import Rewievs from '../Pages/Rewievs';
// const Movies = lazy(() => import('../Pages/Movies'));
const Cast = lazy(() => import('../Pages/Cast'));
const Rewievs = lazy(() => import('../Pages/Rewievs'));
const Home = lazy(() => import('../Pages/Home'));
const FilmDetails = lazy(() => import('../Pages/FilmDetails'));

function Header() {
  return (
    <header>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </nav>
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
    </header>
  );
}

export default Header;
