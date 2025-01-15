import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; 
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import Wishlist from "./Components/Wishlist";
import WishlistProvider from "./Context/WishListContext";
function App() {
  return (
    <WishlistProvider>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
     </WishlistProvider>
  );
}

export default App;
