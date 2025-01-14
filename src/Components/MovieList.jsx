import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('popular');

    const API_KEY = 'db15af19f3008a1832cf971f785137ec';
    const fetchMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [category]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div>
                <button onClick={() => setCategory('popular')}>Popular</button>
                <button onClick={() => setCategory('now_playing')}>Now Playing</button>
                <button onClick={() => setCategory('top_rated')}>Top Rated</button>
                <button onClick={() => setCategory('upcoming')}>Upcoming</button>
            </div>
            <div>
                {movies
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((movie) => (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <p>Rating: {movie.vote_average}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieList;
