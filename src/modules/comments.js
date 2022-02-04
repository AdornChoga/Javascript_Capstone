import getMovies from './movies.js';
import getSeries from './series.js';
import * as Templates from './html_templates.js';

const comments = async (data, type) => {
  data.forEach(async (btn) => {
    btn.addEventListener('click', async () => {
      const filmData = type === 'movies' ? await getMovies()[btn.id] : await getSeries()[btn.id];
      Templates.popUpTemplate(filmData);
    });
  });
};

export default comments;