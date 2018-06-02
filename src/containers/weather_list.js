import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  
    renderWeather(cityData){
        if(!cityData){
            return;
        }
        const name = cityData.city.name;
        const temps = cityData.list.map( (data) => data.main.temp - 273.15 );
        const pressures = cityData.list.map( (data) => data.main.pressure );
        const humidities = cityData.list.map( (data) => data.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color={'orange'} units={'C'} />
                </td>
                <td>
                    <Chart data={pressures} color={'blue'} units={'hPa'}/>
                </td>
                <td>                    
                    <Chart data={humidities} color={'green'}  units={'%'}/>
                </td>
            </tr>
        );
    }

    render(){
        return(
            <table className='table table-hoover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);