import React,{useState,useEffect} from 'react'
import "./style.css"
import Card from "./cardweather"


const Weather = () => {
 const [searchval,setSearchval]=useState("Kolkata")
 const [weather,setWeather]=useState("")
 const getweatherinfo =async()=>{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=e34677f286cec86b8f2754eb62e297ae`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const {temp , pressure,humidity}=data.main;  
      const {main:weathermood}= data.weather[0];
      const {name}=data;
      const {country,sunset,sunrise}=data.sys;
      const {speed} = data.wind
     const weatherinfo={
         temp,pressure,humidity,weathermood,name,country,sunset,sunrise,speed
     }
     setWeather(weatherinfo)
 }
 useEffect(() => {
    getweatherinfo();
   
 }, [])
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.12/css/weather-icons.min.css" referrerpolicy="no-referrer" />
        <div className='container'>
        <input type="search" name="" id=""  value={searchval} onChange={(event)=> setSearchval(event.target.value)} className='search'/>
        <button className='searchBtn' onClick={getweatherinfo}>Search</button>
        <Card weatherinfo={weather}/>
        </div>
        </>
    )
}

export default Weather
