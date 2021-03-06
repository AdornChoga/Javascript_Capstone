const filmsID = [314142, 79551, 343435, 377673, 80270,
  248596, 84068, 73255, 353615];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getMovies = () => {
  const result = filmsID.map(async (id) => {
    const data = fetch(`${baseUrl}${id}`);
    const respone = (await data).json();
    const movie = await respone;
    const obj = {
      name: movie.name,
      image: movie.image.original,
      description: movie.summary,
      runtime: movie.averageRuntime,
      id: movie.id,
    };
    return obj;
  });
  return result;
};

export default getMovies;
