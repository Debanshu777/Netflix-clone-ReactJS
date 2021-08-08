import React from 'react';
import { Colors } from '../../utils/constants';
import { Header, Backdrop } from '../containers';
import { Footer } from '../sections';

export default function SignUp() {
  return (
    <div>
      <Header to="" />
      <Backdrop />
      <Footer color={Colors.blackTransparent} />
    </div>
  );
}
