import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { WishlistContext } from '../Context/WishListContext';

const MovieDetail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { addToWishlist } = useContext(WishlistContext);

  const API_KEY = 'db15af19f3008a1832cf971f785137ec';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      setMovie(response.data);
    };

    const fetchCast = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
      setCast(response.data.cast.slice(0, 10)); // Limiter à 10 acteurs
    };

    const fetchSimilarMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`);
      setSimilarMovies(response.data.results);
    };

    fetchMovieDetails();
    fetchCast();
    fetchSimilarMovies();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
      style={{ width: '350px', height: 'auto'  }} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }} onClick={() => addToWishlist(movie)}>
  Add to Wishlist
</button>

      <h2>Top Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>

      <h2>Similar Movies</h2>
      <div>
        {similarMovies.map((similar) => (
          <div key={similar.id}>
            <h3>{similar.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`} alt={similar.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
