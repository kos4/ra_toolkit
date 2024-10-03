import From from "../../components/Form";
import React from 'react';
import { useSelector } from 'react-redux';
import MovieListItem from "../../components/MovieListItem";
import PreLoader from "../../components/PreLoader";
import Error from "../../components/Error";

export default function Search() {
  const { loading, movies, error } = useSelector(state => state.search);

  return (
    <>
      { loading && <PreLoader/> }
      <h1 className="App__h1">Поиск фильмов</h1>
      <From/>
      <h2>Результаты поиска</h2>
      <div className="moviesList">
        {movies && movies.map(item => <MovieListItem key={item.imdbID} item={item}/>)}
        {error && <Error text={error}/>}
      </div>
    </>
  );
}