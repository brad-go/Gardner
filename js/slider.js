const sliderLabelOff = document.querySelector('.slider-label__off');
const sliderLabelOn = document.querySelector('.slider-label__on');
const sliderNoticeOff = document.querySelector('.slider-notice__off');
const sliderNoticeOn = document.querySelector('.slider-notice__on');
const slider = document.querySelector('#checkbox')

slider.addEventListener('click', () => {
  sliderLabelOff.classList.toggle('hidden');
  sliderLabelOn.classList.toggle('hidden');
  sliderNoticeOff.classList.toggle('hidden');
  sliderNoticeOn.classList.toggle('hidden');
})

// slider의 css를 설정하는데 어려웠다. 