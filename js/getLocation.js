import getLocal from './getLocal'
const getLocation = (body) => {
    fetch('https://ipinfo.io/json?token=1b5069ce389b18')
        .then((response) => response.json())
        .then((response) => {
            const currentCity = response.loc;
            return getLocal(currentCity);
        })
}
export default getLocation;