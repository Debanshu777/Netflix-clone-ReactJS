import React from 'react';
import Backdrop from './components/containers/Backdrop';
import Header from './components/containers/Header';
import Jumbotron from './components/Jumbotron';
import StartUpPageComponent from './components/StartUpPageComponent';
import jumboData from './fixtures/jumbo.json';
import Footer from './components/Footer';

export default function App() {
  return (
    <fragment>
      <Header />
      <StartUpPageComponent />
      <Backdrop />
      <Jumbotron jumboData={jumboData} />
      <Footer />
    </fragment>
  );
}
