import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/ducks/fetchTrending';

// const useStyles = makeStyles(() => ({

// }));
export default function DynamicRow({ title, fetchUrl, isLarge = false }) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    dispatch(getData(fetchUrl));
  }, [fetchUrl]);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
