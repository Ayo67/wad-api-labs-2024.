export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=dec57f9c39e439a87062886e19936f75&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };