import axios from 'axios';

async function getFilmsCast(filmId) {
  const KEY = 'd67ee4551789dee73b6dc07167e48b8f';
  const API = 'https://api.themoviedb.org/3/';

  try {
    const response = await axios.get(
      `${API}movie/${filmId}/credits?api_key=${KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getFilmsCast;
