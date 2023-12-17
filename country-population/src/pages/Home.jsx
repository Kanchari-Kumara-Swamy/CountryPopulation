import React, { useEffect, useState } from "react";
import MovieCard from "../Components/Card/Card";
import SearchBox from "../Components/SearchBox/SearchBox";
import '../../src/App.css'
const Home = () => {
  // const [movies, setMovies] = useState([

  // ]);

  // const getCountryData = async ()=>{
  //   const url = 'http://www.omdbapi.com/?s=star wars&apikey=6bb931fb'
  //   const response = await fetch(url);
  //   const responseJson =  await response.json();
  //   console.log(responseJson);
  //   setMovies(responseJson.Search);
  // }

  // useEffect(()=>{
  //   getCountryData();
  // },[]);
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('avengers')

  console.log(search);

 async function getMovies (search) {
  const url = `http://www.omdbapi.com/?s=${search}&apikey=6bb931fb`;

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  if(responseJson.Search){
    setMovies(responseJson.Search)
  }
 }

 useEffect(()=>{
  getMovies(search);
 },[search])

  


  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <SearchBox search={search} setSearch={setSearch}/>
      </div>
      <div className="row flex-row flex-nowrap overflow-auto ">
        <MovieCard movies={movies}/>
      </div>     
    </div>
  );
};

export default Home;
