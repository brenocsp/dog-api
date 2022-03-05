import React from 'react';
import Header from "./components/Header.js";
import DogImages from "./components/DogImages.js"

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <h2 className='subtitle'>Um site para quem ama cachorrinhos!</h2>
      <DogImages/>
      <h2 className='subtitle'>Fim da Pag</h2>
    </div>
  );
}

export default App;
