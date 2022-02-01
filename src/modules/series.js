const filmsID = [276562, 350665, 396564, 359264, 364928, 279536];
const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const getSeries = () => {
  const result = filmsID.map(async (id) => {
    const data = fetch(`${baseUrl}${id}`);
    const respone = (await data).json();
    const movie = await respone;
    const obj = {
      name: movie.name,
      image: movie.image.original,
      description: movie.summary,
    };
    return obj;
  });
  return result;
};

export default getSeries;