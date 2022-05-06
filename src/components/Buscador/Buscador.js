import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { getMovies, addMovieFavorite } from '../../actions';
import Cards from '../Cards/Cards';
import './Buscador.css';

export default function Buscador(props) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesLoaded);

  const valida = function (input) {
    if (!input) {
      setError('Ingrese una pelicula');
    } else if (!/[a-zA-Z]+/.test(input)) {
      setError('No se permiten numeros ni simbolos');
    } else {
      setError('');
    }
    setTitle(input);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    valida(e.target.search.value);
    if (error === '') {
      dispatch(getMovies(e.target.search.value));
      setTitle('');
      // if (false) {
      //   console.log('OK')
      //   swal("Pelicula No Encontrada¡", e.target.search.value, "error");
      // }
    }
  }

  const favorito = (e) => {
    dispatch(addMovieFavorite(e))
    swal("Hecho", "Pelicula Agregada a Favoritas!", "success");
  }

  return (
    <div >
      <div className='buscador'>
        <form className="form-buscador" onSubmit={(e) => onSubmit(e)} >
          <label className="label-buscador" htmlFor="title">Película: </label>
          <input
            className="input-buscador"
            name="search"
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => valida(e.target.value)}
          />
          <button
            className="btn-buscador"
            type="submit"
            onClick={() => onSubmit} >
            Buscar
          </button>
          {
            !error ? null : <span className="error" >{error}</span>
          }
        </form>
      </div>
      {
        movies.length !== 0 ? <Cards datos={movies} onClick={(e) => favorito(e)} favorite={false} /> :
          <div className="Alert">
            <div className="Header">
              <h2>Hola</h2>
              <p>
                No hay peliculas listadas
              </p>
              <hr />
              <p>
                Busca peliculas de tu preferencia para encontrarlas aqui.
              </p>
            </div>
          </div>
      }
    </div>
  );
}
