import * as UI from './appUI.js';
import getMovies from './movies.js';
import getSeries from './series.js';
import countItems from './items_counter.js';

const movieSection = document.querySelector('.movies-sect');
const seriesSection = document.querySelector('.series-sect');
const numOfMovies = document.querySelector('#num-of-movies');
const numOfSeries = document.querySelector('#num-of-series');

const events = () => {
  window.addEventListener('load', () => {
    UI.displayMovies();
    movieSection.classList.add('focussed');
    numOfMovies.innerHTML = `(${countItems(getMovies())})`;
  });

  movieSection.addEventListener('click', () => {
    movieSection.classList.add('focussed');
    seriesSection.classList.remove('focussed');
    UI.displayMovies();
    numOfMovies.innerHTML = `(${countItems(getMovies())})`;
    numOfSeries.innerHTML = '';
  });

  seriesSection.addEventListener('click', () => {
    seriesSection.classList.add('focussed');
    movieSection.classList.remove('focussed');
    UI.displaySeries();
    numOfSeries.innerHTML = `(${countItems(getSeries())})`;
    numOfMovies.innerHTML = '';
  });
};

export default events;