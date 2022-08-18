import React from 'react';
import Card1 from '../Card/Card';
import './cards.css'

export default function Cards(props) {
  const tarjetas = () => props.datos.map((movie, index) => <Card1 key={index} datos={movie} onClick={props.onClick} favorite={props.favorite} />);
  return (
    <div className='cards'>
      { tarjetas()}
    </div>
  );
}