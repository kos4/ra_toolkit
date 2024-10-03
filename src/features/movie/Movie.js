import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "./movieSlice";
import {useEffect} from "react";
import MovieDetail from "../../components/MovieDetail";
import PreLoader from "../../components/PreLoader";
import Error from "../../components/Error";

export default function Movie() {
  const { loading, movie, error } = useSelector(state => state.movie);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);


  return (
    <>
      <h1 className="App__h1">Описание фильма</h1>
      { loading && <PreLoader/> }
      { error && <Error text={error}/> }
      { movie && <MovieDetail movie={movie}/> }
    </>
  );
}