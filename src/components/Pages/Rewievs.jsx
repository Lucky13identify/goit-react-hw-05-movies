import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerDivInfo, Head } from '../PagesStyles/Rewievs.styled';
import getFilmsReviewe from '../../services/ReviweFilmAPI';

function Rewievs() {
  const [rewievs, setRewievs] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    getFilmsReviewe(filmId).then(result => setRewievs(result.results));
  }, [filmId]);

  return (
    <ContainerDivInfo>
      {rewievs.map(act => (
        <li key={act.id}>
          <Head>Author: {act.author}</Head>
          <p>{act.content}</p>
        </li>
      ))}
    </ContainerDivInfo>
  );
}

export default Rewievs;
