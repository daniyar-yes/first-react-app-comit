/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Heading({ children }) {

  const level = useContext(LevelContext);

    switch (level) {
      case 1:
        return <h1>{children} Value from context: {level}</h1>;
      case 2:
        return <h2>{children} Value from context: {level}</h2>;
      case 3:
        return <h3>{children}Value from context: {level}</h3>;
      case 4:
        return <h4>{children}Value from context: {level}</h4>;
      case 5:
        return <h5>{children}Value from context: {level}</h5>;
      case 6:
        return <h6>{children}Value from context: {level}</h6>;
      case 'hiiiiii':
        return <h1>{children}Value from context: {level}</h1>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }
  