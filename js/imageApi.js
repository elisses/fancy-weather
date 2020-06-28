
/**get all season */
const getapiImage = (body) => {
  const clientId = 'm98TCE9S_x2cHWHO4VBayF-IktOzVC7KEzixZUJIz1A';
  const url = `https://api.unsplash.com/photos/random?query=seasons&client_id=${clientId}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      body.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center / cover fixed,url(${response.urls.regular})center center no-repeat fixed`;
      body.style.backgroundSize = '100% 100vh';
      console.log(response.urls.regular);
    })
    .catch((e) => e);
};
export default getapiImage;
