import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  row: {
    color: 'white',
    marginLeft: '20px',
  },
  rowPosters: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
    padding: '20px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  rowPosterLarge: {
    maxHeight: '250px',
    objectFit: 'contain',
    marginRight: '10px',
    width: '100%',
    transition: 'transform 450ms',
    '&:hover': {
      transform: 'scale(1.09)',
      opacity: 1,
    },
  },
  rowPoster: {
    maxHeight: '100px',
    objectFit: 'contain',
    marginRight: '10px',
    width: '100%',
    transition: 'transform 450ms',
    '&:hover': {
      transform: 'scale(1.08)',
      opacity: 1,
    },
  },
}));
const useReduxListCommonSelectors = (keyword) => ({
  fetchNetflixOriginals: useSelector((state) => state.fetchNetflixOriginals.payload),
  fetchTopRated: useSelector((state) => state.fetchTopRated.payload),
  fetchTrending: useSelector((state) => state.fetchTrending.payload),
});
const baseUrl = 'https://image.tmdb.org/t/p/original/';

export default function DynamicRow({ title, fetchUrl, getDataFunction, setDataFunction, store, isLarge = false }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    dispatch(
      getDataFunction({
        url: fetchUrl,
        setDataFunction,
      })
    );
  }, [fetchUrl]);
  const movies = useReduxListCommonSelectors()[store]?.results;
  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.rowPosters}>
        {movies?.map((movie) =>
          (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path) ? (
            <img
              key={movie.id}
              className={isLarge ? classes.rowPosterLarge : classes.rowPoster}
              src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
              alt=""
            />
          ) : (
            <div />
          )
        )}
      </div>
    </div>
  );
}
