import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Movie from './MovieList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movie />
  </StrictMode>,
)

