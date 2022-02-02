import * as UI from './appUI.js';
import getMovies from './movies.js';
import getSeries from './series.js';
import {postLikes} from './likes.js'
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

const comments = (data, type) => {
  data.forEach(async (btn) => {
    let filmData =
    type === 'movies' ? await getMovies()[btn.id] : await getSeries()[btn.id];
    btn.addEventListener('click', () => {
      Templates.popUpTemplate(filmData)
    })
  })
}

const filmLikes = async (likesIcons) => {
  likesIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      postLikes(icon.id)
    })
  })
}

export {events, comments, filmLikes};