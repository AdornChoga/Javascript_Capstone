import getMovies from './movies.js';
import getSeries from './series.js';
import * as Templates from './html_templates.js';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'A6awKRj5ONHGw5twcKDH';

const comments = (data, type) => {
  data.forEach(async (btn) => {
    const filmData = type === 'movies' ? await getMovies()[btn.id] : await getSeries()[btn.id];
    btn.addEventListener('click', () => {
      Templates.popUpTemplate(filmData);
    });
  });
};

const postComment = async (comment) => {
  await fetch(`${baseUrl}${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};

const getComment = async (id) => {
  const response = await fetch(`${baseUrl}${appId}/comments?item_id=${id}`);
  const result = await response.json();
  return result;
};

export { comments, getComment, postComment };
