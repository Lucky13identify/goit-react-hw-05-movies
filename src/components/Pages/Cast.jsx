import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=d67ee4551789dee73b6dc07167e48b8f`
      )
      .then(result => setCast(result.data.cast));
  }, []);

  return (
    <ul>
      {cast.map(act => (
        <li key={act.cast_id}>
          <img src="" alt="" />
          <p>{act.original_name}</p>
          <p>Character: {act.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
