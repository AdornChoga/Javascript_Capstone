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
  comments(commentsButtons)
};

const displaySeries = () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getSeries().forEach(async (movie) => {
    const movieData = await movie;
    filmsContainer.innerHTML += filmTemplate(movieData);
    const btnComment = document.querySelectorAll('.comments');
    btnComment.forEach((x) => {
      x.addEventListener('click', async () => {
        const resp = await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${x.id}`);
        const data = await resp.json();
        const div = displayPopUp(data);
        document.body.append(div);
        document.querySelector('.close-icon').addEventListener('click', () => {
          document.querySelector('.poppup-container').remove();
        });
      });
    });
  });
};

export { displayMovies, displaySeries };
