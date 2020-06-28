const getWeather = (location, body) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=6ac2cbb5a784483ca0405328200206&q=${location}&days=4`;
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            document.getElementById('tempNow').innerText = `${response.current.temp_c}`;
            document.getElementById('icon').src = response.current.condition.icon;
            document.getElementById('text').innerText = response.current.condition.text;
            document.getElementById('feelsLike').innerText = ` Feels Like: ${response.current.feelslike_c}°`;
            document.getElementById('wind').innerText = ` Wind: ${response.current.wind_kph}`;
            document.getElementById('humidity').innerText = ` Humidity: ${response.current.humidity}%`;
            document.getElementById('forecastDay').innerText = `${new Date(response.forecast.forecastday[0].date).toLocaleString('en-US', { weekday: 'long' })}`;
            document.getElementById('forecastTemp').innerText = `${response.forecast.forecastday[0].day.maxtemp_c}°`;
            document.getElementById('forecastIcon').src = response.forecast.forecastday[0].day.condition.icon;
            document.getElementById('forecastDaySecond').innerText = `${new Date(response.forecast.forecastday[1].date).toLocaleString('en-US', { weekday: 'long' })}`;
            document.getElementById('forecastTempSecond').innerText = `${response.forecast.forecastday[1].day.maxtemp_c}°`;
            document.getElementById('forecastIconSecond').src = response.forecast.forecastday[1].day.condition.icon;
            document.getElementById('forecastDayThird').innerText = `${new Date(response.forecast.forecastday[2].date).toLocaleString('en-US', { weekday: 'long' })}`;
            document.getElementById('forecastTempThird').innerText = `${response.forecast.forecastday[2].day.maxtemp_c}°`;
            document.getElementById('forecastIconThird').src = response.forecast.forecastday[2].day.condition.icon;
        })
}

export default getWeather;