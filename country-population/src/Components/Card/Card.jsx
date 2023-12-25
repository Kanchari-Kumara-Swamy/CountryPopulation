
import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"
/**
 * 
 * @param {array} props movies
 * @returns 
 */
const MovieCard = (props) => {
  console.log(props);
  console.log(props.movies);
  return (
     <>
       {props.movies.map((movie, index) => {
         // Check if movie.Title contains a colon ':'
         if (movie.Title.includes(':')) {
           // Split the movie.Title into an array using the colon ':' as the separator
           // and then get the last element of the array (everything after the colon)
           movie.Title = movie.Title.split(':').pop();
         }
         return (
           <Link className="movies" to={`/movies/${movie.Title}`}>
             <div>
               <img src={movie.Poster}></img>
             </div>
           </Link>
         );
       })}
     </>
  );
 };
 
export default MovieCard;


