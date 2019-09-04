import React from 'react';
import { useFetch } from '../../hooks';

import './app.scss';

import Photos from './../photos';

const App = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [data, loading] = useFetch(url);

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <Photos photos={data}/>
  );
};

export default App;
