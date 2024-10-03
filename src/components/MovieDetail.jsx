import ButtonAddWhitelist from "./ButtonAddWhitelist";
import {useSelector} from "react-redux";

export default function MovieDetail({movie}) {
  const { list } = useSelector(state => state.whitelist);
  const isWhitelist = list.find(i => i.id === movie.imdbID) === undefined;

  return (
    <div className="movie">
      <div className="movie__poster">
        <img className="movie__image" src={movie.Poster} alt={movie.Title}/>
      </div>
      <div className="movie__info">
        <div className="movie__title">{movie.Title}</div>
        <div className="movie__year">Год выхода: {movie.Year}</div>
        <div className="movie__genre">Жанры: {movie.Genre}</div>
        <div className="movie__runtime">Продолжительность: {movie.Runtime}</div>
        <div className="movie__director">Режиссер: {movie.Director}</div>
        <div className="movie__actors">Актеры: {movie.Actors}</div>
        <div className="movie__raiting">Рейтинг: {movie.imdbRating}</div>
        { isWhitelist && <ButtonAddWhitelist item={{id: movie.imdbID, title: movie.Title}}/> }
      </div>
    </div>
  );
}