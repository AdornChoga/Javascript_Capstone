import getSeries from './series.js';
import getMovies from './movies.js';

const displayMovies = () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getMovies().forEach(async (movie) => {
    const movieData = await movie;
    filmsContainer.innerHTML += `
    <li>
      <div class="film-image">
        <img src=${movieData.image}>
      </div>
      <h1>${movieData.name}</h1>
    </li>
    `;
  });
};

const displaySeries = () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getSeries().forEach(async (movie) => {
    const movieData = await movie;
    filmsContainer.innerHTML += `
    <li>
      <div class="film-image">
        <img src=${movieData.image}>
      </div>
      <h1>${movieData.name}</h1>
    </li>
    `;
  });
};

export { displayMovies, displaySeries };