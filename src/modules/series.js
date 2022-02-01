const filmsID = [276562, 350665, 396564, 359264, 364928, 279536];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getSeries = () => {
  const filmsContainer = document.querySelector('.films');
  const movies = [];
  filmsContainer.innerHTML = '';
  filmsID.forEach(async (id) => {
    let data = fetch(`${baseUrl}${id}`);
    let respone = (await data).json();
    let movie = await respone;
    filmsContainer.innerHTML += `
    <li>
      <div class="film-image">
        <img src=${movie.image.original}>
      </div>
      <h1>${movie.name}</h1>
    </li>
    `
  })
  return movies
}

export default getSeries;