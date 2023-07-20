import axios from 'axios'

export const getPopularMovies = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}

export const getMovieVideo = async (id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}
