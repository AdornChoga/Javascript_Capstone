const moviesID = [101501,79551,343435,377673,80270,248596];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';
const movies = [];

const getMovies = () => {
  moviesID.forEach(async (id) => {
    let data = fetch(`${baseUrl}${id}`);
    let respone = (await data).json();
    let movie = await respone;
    movies.push({
      name: movie.name,
      image: movie.image.original,
      description: movie.summary
    })
  })
  return movies
}

export {getMovies}

