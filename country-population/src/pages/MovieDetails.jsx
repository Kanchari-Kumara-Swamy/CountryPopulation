import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MovieDetails = ({search}) => {
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState({});

    const {id} = useParams();


    useEffect(()=>{
        const getMovie = async ()=>{
            const currentUrl = window.location.pathname;
            console.log(currentUrl);
            // Split the path into an array of strings
            const pathParts =currentUrl.replace(/%20/g, ' ').split("/");
            console.log(pathParts);
            const getMovieName = pathParts[pathParts.length - 1];
            console.log(getMovieName);
            const result = await fetch(`http://www.omdbapi.com/?s=${getMovieName}&apikey=6bb931fb`)
            const data = await result.json();
            console.log(data)

            console.log(data.Search);

            let firstItem = null; // Assign a default value here

            if(data.Search && data.Search.length > 0){
                firstItem = data.Search[0];
                console.log(firstItem);
            }

            setMovieDetails(firstItem);
        }

        getMovie();
        
    },[])
  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title}></img>
      <p>This Movie is released on {movieDetails.Year}</p>
    </div>
  )
}

export default MovieDetails
