
import React from 'react'
import "../../App.css"
/**
 * 
 * @param {array} props movies
 * @returns 
 */
const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie,index)=>(
        <div className='movies'>
          <img src={movie.Poster}></img>
        </div>
      ))}
    </>
  )
}

export default MovieCard;
