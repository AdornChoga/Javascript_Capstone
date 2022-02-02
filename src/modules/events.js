import * as UI from './appUI.js';
import getMovies from './movies.js';
import * as Templates from './html_templates.js';

const movieSection = document.querySelector('.movie-sect');
const seriesSection = document.querySelector('.series-sect');

const events = () => {
  window.addEventListener('load', () => {
    UI.displayMovies();
    movieSection.classList.add('focussed');
  });

  movieSection.addEventListener('click', () => {
    movieSection.classList.add('focussed');
    seriesSection.classList.remove('focussed');
    UI.displayMovies();
  });

  seriesSection.addEventListener('click', () => {
    seriesSection.classList.add('focussed');
    movieSection.classList.remove('focussed');
    UI.displaySeries();
  });
};

const comments = (data) => {
  data.forEach(async (btn) => {
    let moviesData = await getMovies()[btn.id];
    btn.addEventListener('click', () => {
      Templates.popUpTemplate(moviesData)
    })
  })
}

export {events, comments};