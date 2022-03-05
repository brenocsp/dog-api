import React from "react";
import axios from 'axios';

function DogImages() {

  for (let i=0; i<2; i++) {
    axios.get('https://api.thedogapi.com/v1/images/search', {
      method: 'GET',
      headers: {  
        'x-api-key': '2d7f1333-8853-4e28-a48c-04209802b01d'
      }
    }).then(resposta => carregaElementosNaPagina(resposta.data))
      .catch(err=>console.log(err));
  }

  function carregaElementosNaPagina(dogData) {
    const img = document.createElement("img");
    img.src = dogData[0].url;
    document.body.appendChild(img);
    
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(img);
  }

  return ( 
    <div>
        <div className="resultado">
          
        </div>
        <p className='mostrar-mais'>Mostrar Mais</p>
        <button>
            <img src="assets/arrowDown.png" alt="BotÃ£o para mostrar mais fotos de cachorros" />
        </button>
    </div>
  );
}

export default DogImages;