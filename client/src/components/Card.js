import React from 'react';
import download from '../assets/download.png'
import { downloadImage } from '../utils';

const Card = ({photo,name,prompt}) => {

  return (
    
    <div class="card" style={{width: '15rem'}}>
  <img class="card-img-top" src={photo} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{prompt}</p>
    <h6 class="card-title">-{name}</h6>
    <a href="#" class="btn btn-success mt-2">download</a>
  </div>
</div>
  );
}

export default Card;
