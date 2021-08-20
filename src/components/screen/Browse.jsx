import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchNetflixOriginals, {
  getDataFetchNetflixOriginals,
  getDataFromStore,
  setDataFetchNetflixOriginals,
} from '../../redux/ducks/fetchNetflixOriginals';
import { getDataFetchTopRated, setDataFetchTopRated } from '../../redux/ducks/fetchTopRated';
import { getDataFetchTrending, setDataFetchTrending } from '../../redux/ducks/fetchTrending';
import requests from '../../services/requests';
import Banner from '../containers/Banner';
import DynamicRow from '../containers/DynamicRow';
import Navbar from '../containers/Navbar';

export default function Browse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDataFetchNetflixOriginals({
        url: requests.fetchNetflixOriginals,
        setDataFunction: setDataFetchNetflixOriginals,
      })
    );
  }, []);
  const netflixOriginalsData = useSelector((state) => state.fetchNetflixOriginals.payload);
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
      <DynamicRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        getDataFunction={getDataFetchNetflixOriginals}
        setDataFunction={setDataFetchNetflixOriginals}
        store="fetchNetflixOriginals"
        isLarge
      />
      <DynamicRow
        title="Treading Now"
        fetchUrl={requests.fetchTrending}
        getDataFunction={getDataFetchTrending}
        setDataFunction={setDataFetchTrending}
        store="fetchTrending"
      />
      <DynamicRow
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        getDataFunction={getDataFetchTopRated}
        setDataFunction={setDataFetchTopRated}
        store="fetchTopRated"
      />
      {/* <DynamicRow title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <DynamicRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <DynamicRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <DynamicRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <DynamicRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}
