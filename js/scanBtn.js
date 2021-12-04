const scanBtn = document.querySelector('#btnScan');
const mainPage = document.querySelector('#mainPage');
const qrPage = document.querySelector('#qrPage');
const homeImgs = document.querySelectorAll('.btn-home img');

const handleHomeImgs = () => {
  homeImgs[0].classList.add('hidden');
  homeImgs[1].classList.remove('hidden');
}

scanBtn.addEventListener('click', () => {
  mainPage.classList.add('page-hidden');
  qrPage.classList.remove('page-hidden');
  handleHomeImgs();
})