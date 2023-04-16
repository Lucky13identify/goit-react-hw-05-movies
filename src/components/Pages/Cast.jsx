import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerDivInfo, ContainerDivLi } from '../PagesStyles/Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=d67ee4551789dee73b6dc07167e48b8f`
      )
      .then(result => setCast(result.data.cast));
  }, [filmId]);

  return (
    <ContainerDivInfo>
      {cast.map(act => (
        <li key={act.cast_id}>
          <img
            src={`https://www.themoviedb.org/t/p/w200/${act.profile_path}`}
            alt=""
          />
          <ContainerDivLi>{act.original_name}</ContainerDivLi>
          <p>Character: {act.character}</p>
        </li>
      ))}
    </ContainerDivInfo>
  );
}

export default Cast;
