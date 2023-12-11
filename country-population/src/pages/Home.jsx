import React, { useEffect, useState } from "react";
import InfoCard from "../Components/Card/Card";
import { getCountryData } from "../Components/utils/api";
import axios from 'axios';
const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const interval = setInterval(getCountryData, 1000); // 1000 ms = 1 second
    return () => clearInterval(interval);
 }, []);

  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries'
  const options = {
    params: {limit: '5'},
    headers: {
      'X-RapidAPI-Key': '617512f68cmsh04b6a15e6d2f14bp16eb70jsnf2fbb085b090',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  const getCountryData = async ()=>{
    try{
        const {data: { data }} = await axios.get(url, options);
        return data;
        setCountry(data);
    }catch (error){
        console.log(error)
    }
}


  return (
    <div>
    {country.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <InfoCard countries={country} />
    )}
      
    </div>
  );
};

export default Home;
