import {useDispatch} from "react-redux";
import {fetchMovies} from "../features/search/searchSlice";

export default function From({onSubmit}) {
  const dispatch = useDispatch();
  const handlerSubmit = event => {
    event.preventDefault();
    const { search } = Object.fromEntries(new FormData(event.target).entries());
    dispatch(fetchMovies(search));
  };

  return (
    <form action="" className="form" onSubmit={handlerSubmit}>
      <input type="text" className="form__input-text" name="search" id="search"
        placeholder="Введите название фильма..."/>
      <button className="form__button">Найти</button>
    </form>
  );
}