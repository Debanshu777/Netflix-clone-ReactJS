import React from 'react';
import Backdrop from './components/containers/Backdrop';
import Header from './components/containers/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import StartUpPageComponent from './components/StartUpPageComponent';
import jumboData from './fixtures/jumbo.json'

export default function App() {
  return (
    <fragment>
      <Header/>
      <StartUpPageComponent/>
      <Backdrop/>
      <Jumbotron jumboData={jumboData}/>
      <Footer/>
    </fragment>
  )
}


