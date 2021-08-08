import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/ducks/fetchNetflixOriginals';
import Banner from '../containers/Banner';
import Navbar from '../containers/Navbar';

export default function Browse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const netflixOriginalsData = useSelector((state) => state.fetchNetflixOriginals.payload);
  console.log(netflixOriginalsData);
  return (
    <div>
      <Navbar />
      {netflixOriginalsData !== undefined ? (
        <Banner
          bannerData={netflixOriginalsData.results[Math.floor(Math.random() * netflixOriginalsData.results.length - 1)]}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
