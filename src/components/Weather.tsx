import { useState, useEffect } from "react";
import { WeatherFetcher } from "./WeatherFetcher";

function Weather() {


    const [selectedCity, setSelectedCity] = useState('')
    const [cityWeather, setCityWeather] = useState({weather: "Sunny", temperature: "20 C", wind: 1, name: 'Gothenburg'})
    const [infoTemp, setTemp] = useState(true)
    const [selectedTemp, setSelectedTemp] = useState('')

    
    function handleWeatherCity(e : any) {
        let inputCity = e.target.value
        setSelectedCity(inputCity)
    }

    async function setWeather(e : any) {
        e.preventDefault()
        let newWeather = await WeatherFetcher(selectedCity, infoTemp)
        setCityWeather(newWeather)
        
    }
    
    return (
        <div>
            <form onSubmit={setWeather}>
            <input placeholder="City..." className="input-bordered input" required onChange={handleWeatherCity} value={selectedCity} type="text" />
            <button className="btn block mx-auto my-2" type="submit">Ändra stad</button>
            </form>
            <div className="card w-96 bg-neutral shadow-xl mx-auto text-white mt-10">
                <figure className="px-10 pt-10">
                    <img srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHCHevUPIqMJhbYiBc-46zeJQpoAxxsAy3A&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cityWeather.name}</h2>
                    <p>Weather {cityWeather.weather}</p>
                    <p>Temperature {cityWeather.temperature}</p>
                    <p>Wind {cityWeather.wind} m/s</p>
                    <div className="card-actions">
                        <button className="btn btn-ghost">Läs mer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;