import React, {useEffect, useState} from 'react';
import WeatherView from './WeatherView'

const WeatherDisplay = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?';
    const APP_IDKEY = '828cab073a2681f16e65a7058f2f8b1e';

        const [weather, setWeather] = useState({main: {}, weather:[0]})
    const [description, setDescription] = useState({})
    const [cityName, setCityName] = useState('London')
    const [countryCode, setCountryCode] = useState('uk')

    useEffect(() => {
        getCurrentWeather(cityName, countryCode)
    }, []);

    const getCurrentWeather = async (cityName, countryCode) => {
        const response = await fetch(url + 'q=' + cityName + ',' + countryCode + '&APPID=' + APP_IDKEY)
        const data = await response.json()
        // console.log(data)
        setWeather(data)
    };

    const changeCity = (eventCity) => {
        const newCity = eventCity.target.value
        setCityName(newCity)
    }

    const changeCountry = (eventCountry) => {
        const newCountry = eventCountry.target.value
        setCountryCode(newCountry)
    }

    const callAPI = (eventButton) => {
        getCurrentWeather(cityName, countryCode)
    }

    return (
        <div className="App">
            <form className="search-form">
                <div>
                    <label htmlFor="city-name">City</label>
                    <input id='city-name' className="search-bar" type="text" onChange={changeCity}/>
                </div>
                <div>
                    <label htmlFor="country-code">Country Code</label>
                    <input id='country-code' className="search-bar" type="text" onChange={changeCountry}/>
                </div>
                
                <button className="search-button" type="button" onClick={callAPI}>
                    submit
                </button>
            </form>
            {/* <div>
                {JSON.stringify(weather)}
            </div> */}
            {/* <div>
                {cityName} - {countryCode}
            </div> */}
            <WeatherView cityName={cityName} countryCode={countryCode} weather={weather} description={description} />
        </div>
    );
}

export default WeatherDisplay
