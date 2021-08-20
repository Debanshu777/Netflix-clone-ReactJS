import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({

// }));
export default function DynamicRow({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, [fetchUrl]);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
