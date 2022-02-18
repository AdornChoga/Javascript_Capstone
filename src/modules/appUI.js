import getSeries from './series.js';
import getMovies from './movies.js';
import comments from './comments.js';
import { filmLikes, getLikes } from './likes.js';
import * as Templates from './html_templates.js';

const displayMovies = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const likesArray = await getLikes();
  const result = getMovies().map(async (movie, index) => {
    const movieData = await movie;
    let [likes] = likesArray.filter((n) => Number(n.item_id) === movieData.id);
    if (!likes) {
      likes = { likes: 0 };
    }
    filmsContainer.innerHTML += Templates.filmTemplate(movieData, index, likes.likes);
    const btn = document.querySelectorAll('.comments');
    const likesNodes = document.querySelectorAll('.likes');
    return { buttons: btn, likesIcons: likesNodes };
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const { likesIcons } = await eventsElements;
  filmLikes(likesIcons);
  comments(commentsButtons, 'movies');
};

const displaySeries = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  const likesArray = await getLikes();
  const result = getSeries().map(async (series, index) => {
    const seriesData = await series;
    let [likes] = likesArray.filter((n) => Number(n.item_id) === seriesData.id);
    if (!likes) {
      likes = { likes: 0 };
    }
    const numLikes = likes !== undefined ? likes.likes : 0;
    filmsContainer.innerHTML += Templates.filmTemplate(seriesData, index, numLikes);
    const btn = document.querySelectorAll('.comments');
    const likesNodes = document.querySelectorAll('.likes');
    return { buttons: btn, likesIcons: likesNodes };
  });
  const eventsElements = result[result.length - 1];
  const commentsButtons = (await eventsElements).buttons;
  const { likesIcons } = await eventsElements;
  filmLikes(likesIcons);
  comments(commentsButtons, 'series');
};

export { displayMovies, displaySeries };
