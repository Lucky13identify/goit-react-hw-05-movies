import axios from 'axios';

async function getFilmsList(word) {
  const KEY = 'd67ee4551789dee73b6dc07167e48b8f';

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${word}?api_key=${KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getFilmsList;
