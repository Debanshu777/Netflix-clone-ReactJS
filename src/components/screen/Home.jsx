import React from 'react';
import { Header, Backdrop } from '../containers';
import { Jumbotron, Footer, StartUpPageComponent } from '../sections';
import jumboData from '../../fixtures/jumbo.json';

export default function Home() {
  return (
    <div>
      <Header />
      <StartUpPageComponent />
      <Backdrop />
      <Jumbotron jumboData={jumboData} />
      <Footer />
    </div>
  );
}
