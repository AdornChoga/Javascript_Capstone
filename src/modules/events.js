import getSeries from './series.js';
import getMovies from './movies.js';

const movieSection = document.querySelector('.movie-sect');
const seriesSection = document.querySelector('.series-sect');

const events = () => {
  window.addEventListener('load', () => {
    getMovies();
    movieSection.classList.add('focussed');
  })

  movieSection.addEventListener('click', (e) => {
    movieSection.classList.add('focussed');
    seriesSection.classList.remove('focussed');
    getMovies();
  })
  
  seriesSection.addEventListener('click', (e) => {
    seriesSection.classList.add('focussed');
    movieSection.classList.remove('focussed');
    getSeries();
  })
}

export default events;