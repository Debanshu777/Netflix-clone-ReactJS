import React from 'react';
import { JumboCards } from '../containers';

export default function Jumbotron(props) {
  const { jumboData } = props;
  return jumboData.map((item) => <JumboCards direction={item.direction} data={item} />);
}
