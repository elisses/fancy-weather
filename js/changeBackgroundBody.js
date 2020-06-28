import getapiImage from './imageApi.js';
const changeBackgroundBody = (body) => {
  const button = document.getElementById('changeColor');
  button.addEventListener('click', () => {
    getapiImage(body);
  });
};
export default changeBackgroundBody;
