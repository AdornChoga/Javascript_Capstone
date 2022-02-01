import getSeries from './series.js';
import getMovies from './movies.js';

const filmTemplate = (info) => {
  return `
    <li>
      <div class="film-image">
        <img src=${info.image}>
      </div>
      <div class="film-info">
        <h1 class="film-title">${info.name}</h1>
        <div>
          <i class="far fa-heart"></i>
        </div>
      </div>
      <button type="button" class="comments">Comments</button>
    </li>
  `;
}


const displayMovies = () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getMovies().forEach(async (movie) => {
    const movieData = await movie;
    filmsContainer.innerHTML += filmTemplate(movieData);
  });
};

const displaySeries = () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getSeries().forEach(async (movie) => {
    const movieData = await movie;
    filmsContainer.innerHTML += filmTemplate(movieData);
  });
};

export { displayMovies, displaySeries };