import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Rewievs() {
  const [rewievs, setRewievs] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=d67ee4551789dee73b6dc07167e48b8f`
      )
      .then(result => setRewievs(result.data.results));
  }, [filmId]);
  console.log(rewievs);

  return (
    <ul>
      {rewievs.map(act => (
        <li key={act.id}>
          <h2>Author: {act.author}</h2>
          <p>{act.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Rewievs;
