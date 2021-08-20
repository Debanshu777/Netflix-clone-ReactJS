import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

// const useStyles = makeStyles(() => ({

// }));
const useReduxListCommonSelectors = (keyword) => ({
  fetchNetflixOriginals: useSelector((state) => state.fetchNetflixOriginals.payload),
  fetchTopRated: useSelector((state) => state.fetchTopRated.payload),
  fetchTrending: useSelector((state) => state.fetchTrending.payload),
});

export default function DynamicRow({ title, fetchUrl, getDataFunction, setDataFunction, store, isLarge = false }) {
  const dispatch = useDispatch();
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    dispatch(
      getDataFunction({
        url: fetchUrl,
        setDataFunction,
      })
    );
  }, [fetchUrl]);
  const movie = useReduxListCommonSelectors()[store];

  console.log(movie);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
