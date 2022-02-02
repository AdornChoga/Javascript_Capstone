import getSeries from './series.js';
import getMovies from './movies.js';

const displayPopUp = (movie) => {
  const container = document.createElement('div');
  container.classList.add('poppup-container');
  container.innerHTML = `
  <div class="popup-window">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="close-icon">
     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
    <img src=${movie.image.medium}>
    <div class="movie-info">
     <h2>${movie.name}</h2>
     <h4>Average Runtime: ${movie.averageRuntime} minutes</h4>
     <h4>Ended: ${movie.ended} </h4>
     <span>${movie.summary}</span>
    </div>
  </div>
  `;
  return container;
};

const filmTemplate = (info) => `
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
      <button type="button" class="comments" id="${info.id}">Comments</button>
    </li>
  `;
const displayMovies = async () => {
  const filmsContainer = document.querySelector('.films');
  filmsContainer.innerHTML = '';
  getMovies().map(async (movie) => {
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
