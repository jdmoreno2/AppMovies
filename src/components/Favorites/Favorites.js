import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFavorite } from '../../actions/index';
import swal from "sweetalert";
import './Favorites.css';
import Cards from "../Cards/Cards";


export default function Favorites(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesFavourites);
  const favorito = (e) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminada, no la veras mas en tu lista de favoritos!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! La pelicula se ha removido de tus favoritos!", {
          icon: "success",
        });
        dispatch(removeMovieFavorite(e))
      } else {
        swal("Tu pelicula sigue en favoritos!");
      }
    });
  }

  return (
    <div>
      <h1 className="favoritas">Películas Favoritas</h1>
      {
        movies.length > 0 ? <Cards datos={movies} onClick={(e) =>  favorito(e)} favorite={true} /> :
          <div className="Alert">
            <div className="Header">
              <h2>Hola</h2>
              <p>
                No tienes películas agregadas en Favoritas
              </p>
              <hr />
              <p>
                Busca y agrega peliculas de tu preferencia para encontrarlas aqui cuando quieras verlas.
              </p>
            </div>
          </div>
      }
    </div>
  );
}