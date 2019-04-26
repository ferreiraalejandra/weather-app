import React, {Component} from 'react';

const url = 'api.openweathermap.org/data/2.5/weather?q={'city'}, 
const APP_APIkey = '828cab073a2681f16e65a7058f2f8b1e'
const getJson = function(response) {
    return response.json();
}

class WeatherDisplay extends Component {
    constructor (props) {
        super(props)
        this.state = {
            wheather: {}
        }
    }
    componentDidMount = () => {
        //const promesaDelApi = await fetch()
        //const respuestaDelApi = await promesaDelApi.json()
        fetch(url)
            .then(getJson)
            //.then(getResponse)
            .then( (wheatherResponse) => {
                this.setState({wheather: wheatherResponse})
            })
    }
    changeCity (event) {

    }
    render () {
        return (
            <div>
                <label htmlFor="city-name">City: </label>
                <input id='city-name' type="text" onChange={this.changeCity}/>
                <Display city={this.state.wheather.name}></Display>
            </div>
        )
    }
}

const Display = props => {
    const city = props.city
    return <div>Sunny {city}</div>
}

export default WeatherDisplay