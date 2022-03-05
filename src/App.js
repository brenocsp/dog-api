import React from 'react';
import axios from 'axios';

import Header from "./components/Header.js";
import DogImages from "./components/DogImages.js"

import './App.css';

// axios.defaults.baseURL = 'https://api.thedogapi.com/v1/images/search'
// axios.defaults.headers.common['x-api-key'] = '4be46b5c-8453-462a-8a28-1f73e711fb62'

function App() {
  return (
    <div>
      <Header></Header>
      <h2 className='subtitle'>Um site para quem ama cachorrinhos!</h2>
      <DogImages></DogImages>
    </div>
  );
}

export default App;
