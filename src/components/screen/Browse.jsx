import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/ducks/fetchNetflixOriginals';
import requests from '../../services/requests';
import Banner from '../containers/Banner';
import DynamicRow from '../containers/DynamicRow';
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
      <DynamicRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <DynamicRow title="Treading Now" fetchUrl={requests.fetchTrending} />
      <DynamicRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <DynamicRow title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <DynamicRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <DynamicRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <DynamicRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <DynamicRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
