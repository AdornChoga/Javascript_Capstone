import getSeries from './series.js';
import getMovies from './movies.js';
import * as Templates from './html_templates.js';
import {comments} from './events.js';

const displayMovies = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const result = getMovies().map(async (movie,index) => {
    const movieData = await movie;
    filmsContainer.innerHTML += Templates.filmTemplate(movieData,index);
    const btn = document.querySelectorAll('.comments')
    const likes = document.querySelectorAll('.fa-heart');
    return {buttons: btn, likesIcons: likes};
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const likesIcons = (await eventsElements).likesIcons;
  comments(commentsButtons, 'movies')
};

const displaySeries = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const result = getSeries().map(async (movie,index) => {
    const movieData = await movie;
    filmsContainer.innerHTML += Templates.filmTemplate(movieData,index);
    const btn = document.querySelectorAll('.comments')
    const likes = document.querySelectorAll('.fa-heart');
    return {buttons: btn, likesIcons: likes};
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const likesIcons = (await eventsElements).likesIcons;
  comments(commentsButtons, 'series')
};

export { displayMovies, displaySeries };
