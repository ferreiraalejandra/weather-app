import React, {useEffect, useState} from 'react';


const WeatherDisplay = () => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?';
    const APP_IDKEY = '828cab073a2681f16e65a7058f2f8b1e';

    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState('London')
    const [countryCode, setCountryCode] = useState('uk')

    useEffect(() => {
        getCurrentWeather(cityName, countryCode);
    }, []);

    const getCurrentWeather = async (cityName, countryCode) => {
        const response = await fetch(url + 'q=' + cityName + ',' + countryCode + '&APPID=' + APP_IDKEY);
        const data = await response.json();
        setWeather(data)
    };

    const changeCity = (eventCity) => {
        const newCity = eventCity.target.value
        setCityName(newCity)
        getCurrentWeather(newCity, countryCode)
        console.log(eventCity, eventCity.target.value)
    }

    const changeCountry = (eventCountry) => {
        const newCountry = eventCountry.target.value
        setCountryCode(newCountry)
        getCurrentWeather(cityName, newCountry)
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
                
                <button className="search-button" type="submit">
                    submit
                </button>
            </form>
            <div>
                {JSON.stringify(weather)}
            </div>
            <div>
                {cityName} - {countryCode}
            </div>
        </div>
    );
}

export default WeatherDisplay