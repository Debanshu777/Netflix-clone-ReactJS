import React from 'react';
import { Header, Backdrop } from '../containers';
import { Jumbotron, Footer, StartUpPageComponent } from '../sections';
import jumboData from '../../fixtures/jumbo.json';
import * as ROUTES from '../../utils/routes';
import { Colors } from '../../utils/constants';

export default function Home() {
  return (
    <div>
      <Header to={ROUTES.SIGN_IN} />
      <StartUpPageComponent />
      <Backdrop />
      <Jumbotron jumboData={jumboData} />
      <Footer where="HOME" color={Colors.backgroundColor} />
    </div>
  );
}
