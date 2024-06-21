import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '44493747-be1491bcf2f1874076b4c452a';

export async function searchImages(query, page = 1, limit = 30) {
  const response = await axios.get(
    `${API_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${limit}&page=${page}`
  );

  const hits = response.data.hits.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    })
  );

  return {
    hits,
    total: response.data.totalHits,
  };
}
