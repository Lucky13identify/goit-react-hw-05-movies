import axios from 'axios';

async function getFilmsList(type, query) {
  const KEY = 'd67ee4551789dee73b6dc07167e48b8f';
  const API = 'https://api.themoviedb.org/3/';

  try {
    const response = await axios.get(`${API}${type}?api_key=${KEY}${query}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getFilmsList;
