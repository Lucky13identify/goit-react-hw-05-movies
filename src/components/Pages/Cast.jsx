import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerDivInfo, ContainerDivLi } from '../PagesStyles/Cast.styled';
import getFilmsList from '../../services/FilmsAPI';

function Cast() {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    getFilmsList(`movie/${filmId}/credits`, '').then(result =>
      setCast(result.cast)
    );
  }, [filmId]);

  return (
    <ContainerDivInfo>
      {cast.map(act => (
        <li key={act.cast_id}>
          {act.profile_path && (
            <img
              src={`https://www.themoviedb.org/t/p/w200/${act.profile_path}`}
              alt=""
            />
          )}
          <ContainerDivLi>{act.original_name}</ContainerDivLi>
          <p>Character: {act.character}</p>
        </li>
      ))}
    </ContainerDivInfo>
  );
}

export default Cast;
