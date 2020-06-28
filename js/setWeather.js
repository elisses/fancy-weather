import getLocal from './getLocal'

const setWeather = () => {
    const button = document.getElementById('setWeather')

    button.addEventListener('click', () => {
        let location = document.getElementById('location').value;
        getLocal(location);
        location = '';
    })

}

export default setWeather;