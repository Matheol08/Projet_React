import React, { useState, useEffect } from 'react';
const Movie = () => {
  const [MovieList, setMovieList] = useState([]);  

  useEffect(() => {
    const APIKEY='db15af19f3008a1832cf971f785137ec'
const url = 'https://api.themoviedb.org/3/account/21750843/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjE1YWYxOWYzMDA4YTE4MzJjZjk3MWY3ODUxMzdlYyIsIm5iZiI6MTczNjg2MjU1NS4wMiwic3ViIjoiNjc4NjZiNWI2MmU4ZmE2MjlkYmIxNDI4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mTqfb0yB4NoChM658r0Mvmd-piXkgjMPtlt6jw4P_-0'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  }, []); 

  return (
    <div>
      <h1>Movies</h1>
      <ul>
  {MovieList.map((Movie) => (
    <li key={Movie.id} className="page">
      <p>{Movie.title}</p>
      <p>{Movie.price}€</p>
      <img src={Movie.image} alt={Movie.title} width={100} />
    </li>
  ))}
</ul>


    </div>
  );
};

export default Movie;