const filmsID = [314142,79551,343435,377673,80270,248596];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getMovies = () => {
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

export default getMovies;


