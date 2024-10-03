import {Link} from "react-router-dom";
import ButtonAddWhitelist from "./ButtonAddWhitelist";
import {useSelector} from "react-redux";

export default function MovieListItem({item}) {
  const linkDetail = `/movie/${item.imdbID}`;
  const { list } = useSelector(state => state.whitelist);
  const isWhitelist = list.find(i => i.id === item.imdbID) === undefined;

  return (
    <div className="moviesList__item">
      <div className="moviesList__item-poster">
        <img className="moviesList__item-poster-image" src={item.Poster} alt={item.Title}/>
      </div>
      <div className="moviesList__item-info">
        <div className="moviesList__item-title">{item.Title}</div>
        <div className="moviesList__item-year">{item.Year}</div>
        <div className="moviesList__item-actions">
          <Link className="moviesList__item-link" to={linkDetail}>Подробнее</Link>
          { isWhitelist && <ButtonAddWhitelist item={{id: item.imdbID, title: item.Title}}/> }
        </div>
      </div>
    </div>
  );
}