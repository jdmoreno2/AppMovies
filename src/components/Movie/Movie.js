import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

export default function Movie(props) {
  const dispatch = useDispatch();
  const movieId = props.match.params.id;
  const dataMovie = useSelector((state) => state.moviesDetail);
  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, []);

  return (
    <Container>
      <Row className='my-4'>
        <Col lg={4} md={6} sm={12} className="py-2" >
          <img src={dataMovie.Poster} alt="Poster" className='Movie-Poster mx-auto d-block' />
        </Col>
        <Col sm={12} md={6} lg={8} className="Movie-Contenido" >
          <h1>{dataMovie.Title}</h1>
          <h3>{dataMovie.Year}</h3>
          <p>{dataMovie.Plot}</p>
          <p><strong>Estreno: </strong> {dataMovie.Released}</p>
          <p><strong>Duracion: </strong> {dataMovie.Runtime}</p>
          <p><strong>Genero: </strong> {dataMovie.Genre}</p>
          <p><strong>Director: </strong>{dataMovie.Director}</p>
          <p><strong>Escritor: </strong>  {dataMovie.Writer}</p>
          <p><strong>Reparto: </strong>  {dataMovie.Actors}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} className="Movie-Contenido" >
          <p><strong>Taquilla: </strong>{dataMovie.BoxOffice}</p>
          <p><strong>Pais: </strong>{dataMovie.Country}</p>
          <p><strong>DVD: </strong> {dataMovie.DVD}</p>
          <p><strong>Premios: </strong> {dataMovie.Awards}</p>
          <p><strong>Puntuacion: </strong> {dataMovie.Metascore}</p>
        </Col>
        <Col lg={6} md={6} sm={12} className="Movie-Contenido" >
          <p><strong>Lenguaje: </strong> {dataMovie.Language}</p>
          <p><strong>Votos: </strong> {dataMovie.imdbVotes}</p>
          <p><strong>Rating: </strong> {dataMovie.imdbRating}</p>
        </Col>
      </Row>
    </Container>
  );
}
