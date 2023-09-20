import React from 'react';
import download from '../assets/download.png'
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative card">
      <img
        className="w-100 rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div>
        <p className="text-white small overflow-auto prompt">{prompt}</p>

        <div className="mt-3 d-flex justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center gap-2">
            <div className="w-7 h-7 rounded-circle bg-success d-flex justify-content-center align-items-center text-white text-small font-weight-bold">{name}</div>
            <p className="text-white small">{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)} className="btn btn-outline-dark">
            <img src={download} alt="download" className="w-6 h-6 object-fit invert" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
