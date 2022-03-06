import React, { useEffect, useState } from "react";
import axios from 'axios';

function DogImages() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
      axios.get('https://api.thedogapi.com/v1/images/search?limit=8&order=RAND', {
        method: 'GET',
        headers: {  
          'x-api-key': '2d7f1333-8853-4e28-a48c-04209802b01d'
        }
      }).then(resposta => {
        setDogs(resposta.data)
        carregaElementosNaPagina(resposta.data)
      })
        .catch(err=>console.log(err));
  }, []);

  function carregaElementosNaPagina(dogData) {
    const img = document.createElement("img");
    img.src = dogData.url;
    document.body.appendChild(img);
    
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(img);
  }

  return ( 
    <div>
      <div className='images'>{dogs.map(dog => <img className="resultado" key={dog.id} alt='oi' src={dog.url}></img>)}</div> 
    </div>
  );
}

export default DogImages;