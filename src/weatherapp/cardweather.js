import React,{useEffect} from 'react'
import { useState } from 'react/cjs/react.development'
import "./style.css"
import Time from "./time"


const Cardweather = ({ weatherinfo }) => {
    const [weatherstate, setWeatherstate] = React.useState();
    const {
        temp, pressure, humidity, weathermood, name, country, sunset, sunrise, speed
    } = weatherinfo
   useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherstate(" wi wi-day-cloudy")
                    break;
                case "Rain":
                    setWeatherstate(" wi wi-day-rain")
                    break;
                case "Haze":
                    setWeatherstate("wi wi-day-haze")
                    break
                case "Mist":
                    setWeatherstate("wi wi-day-fog")
                    break;
                case "Thunderstrom":
                    setWeatherstate("wi wi-day-thunderstorm")
                    break;
                case "Snow":
                    setWeatherstate("wi wi-day-snow")
                    break;
                case "Sunny":
                    setWeatherstate(" wi wi-day-sunny")
                    break;
                default:

                    setWeatherstate(" wi wi-day-sunny")
                    break;
            }
        }

    }, [weathermood])
    let sec = sunset
    let date = new Date(sec * 1000)
    let orgtime = `${date.getHours()}:${date.getMinutes()}`
    return (
        <div className="card">
            <div className="img"><i className={weatherstate} id='img'></i></div>
            <div className='temp'>{temp}&deg;</div>
            <div className="weathermood">{weathermood}</div>
            <div className="country">{name},{country}</div>
            <Time />
            <div className="sunset"><i className={' wi wi-sunset'} id='sun'></i> <span className='tim'>{orgtime} </span><br /> <span className='sun'>sunset</span> </div>
            {/* <div className="sunrise">6.05 AM</div> */}
            <div className="humidity"> <i className={'wi wi-humidity'} id='hum'></i> {humidity} <br /> Humidity </div>
            <div className="preasure"> <i className={'wi wi-rain'} id='rain'></i><span className='rain'>Pressure</span><br />{pressure}</div>
            <div className="speed"><i className='wi wi-strong-wind' id='wind'></i><span className='wind'>Wind</span><br />{speed}</div>

        </div>
    )
}

export default Cardweather
