import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';
import { MinusCircleFilled, StarTwoTone } from '@ant-design/icons';

export default function Card1({ datos, onClick, favorite }) {

  return (
    <div key={datos.imdbID} className="Card" >
      <div className='Card_imagen'>
        <img src={datos.Poster} alt="Poster" />
      </div>
      <div className='Card_body'>
        <button className="Btn-favoritos" onClick={(e) => onClick(datos)}>
          {
            favorite ? <MinusCircleFilled style={{ fontSize: '32px' }}/> : <StarTwoTone style={{ fontSize: '32px' }} />
          }          
        </button>
        <div className="Content">
          <h2 className='Card_titulo'>
            <Link to={`/movie/${datos.imdbID}`}>
              {datos.Title}
            </Link>
          </h2>
          <p>{datos.Type.toUpperCase()} - {datos.Year}</p>
        </div>
      </div>
    </div>
  );
}