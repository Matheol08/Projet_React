import React, { useContext } from 'react';
import { WishlistContext } from '../Context/WishListContext';
import { Link } from 'react-router';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div>
      <h1>My Wishlist</h1>
      <ul>
        {wishlist.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '150px', height: 'auto' }} 
            />            <p>Rating: {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
            <button onClick={() => removeFromWishlist(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
