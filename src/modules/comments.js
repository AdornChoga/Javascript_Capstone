import getMovies from './movies.js';
import getSeries from './series.js';
import * as Templates from './html_templates.js';


const comments = (data, type) => {
  data.forEach(async (btn) => {
    const filmData = type === 'movies' ? await getMovies()[btn.id] : await getSeries()[btn.id];
    btn.addEventListener('click', () => {
      Templates.popUpTemplate(filmData);
    });
  });
};



export default comments;