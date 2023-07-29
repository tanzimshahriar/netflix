export const getData = (type: RequestType) => {
  if (type === 'Trending now') {
    return getTrending()
  } else if (type === 'Ensemble TV Comedies') {
    return getEnsembleTVComedies()
  } else if (type === 'Hollywood Movies') {
    return getHollywoodMovies()
  } else if (type === 'Watch it again') {
    return getHollywoodMovies()
  } else if (type === 'Popular TV Shows') {
    return getAcclaimedTVSeries()
  } else if (type === 'Award-Winning Films') {
    return getTopRatedMovies()
  } else if (type === 'Comedy Movies') {
    return getComedyMovies()
  } else if (type === 'Romantic Favorites') {
    return getRomanceMovies()
  } else if (type === 'Award-winning Crime TV Shows') {
    return getCrimeTVShows()
  } else if (type === 'My list') {
    return []
  } else if (type === 'Sci-Fi Thriller TV Shows') {
    return getScifiTVShows()
  } else {
    return []
  }
}

const getTrending = async () => {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/week', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}

const getEnsembleTVComedies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/tv?with_genres=35',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

const getHollywoodMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?certification=us',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

const getAcclaimedTVSeries = async () => {
  const res = await fetch('https://api.themoviedb.org/3/tv/popular', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}

const getTopRatedMovies = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}

const getComedyMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?with_genres=35',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

const getRomanceMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?with_genres=10749',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

const getCrimeTVShows = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/tv?with_genres=80',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

const getScifiTVShows = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/tv?with_genres=10765',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    },
  )
  return res.json()
}

export const getVideo = async (id: string, mediaType: string) => {
  const url =
    mediaType === 'movie'
      ? `https://api.themoviedb.org/3/movie/${id}/videos`
      : `https://api.themoviedb.org/3/tv/${id}/videos`
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  })
  return res.json()
}

const RequestTypes = [
  'Trending now',
  'Ensemble TV Comedies',
  'Hollywood Movies',
  'Watch it again',
  'Popular TV Shows',
  'Award-Winning Films',
  'Comedy Movies',
  'Romantic Favorites',
  'Award-winning Crime TV Shows',
  'My list',
  'Sci-Fi Thriller TV Shows',
] as const

export type RequestType = (typeof RequestTypes)[number]
