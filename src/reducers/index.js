import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from '../actions'

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  moviesDetail: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.find(m => action.payload.imdbID === m.imdbID) ? state.moviesFavourites : state.moviesFavourites.concat(action.payload)
      }
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search || []
      }
      case GET_MOVIE_DETAIL:
      return {
        ...state,
        moviesDetail: action.payload
      }
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload.imdbID)
      }
    default:
      return state
  }
}

export default rootReducer;