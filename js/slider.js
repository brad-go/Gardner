const slider = document.querySelector('#checkbox')
const sliderLabel = document.querySelector('.slider-label');
const sliderNotice = document.querySelector('.slider-notice');

// slider text의 기본값
sliderLabel.innerText = '알림으로 받기';
sliderNotice.innerText = '알림을 통해 상대방에게 연락합니다.';

slider.addEventListener('click', () => {
  let checked = slider.checked;
  if (checked) {
    sliderLabel.innerText = '전화로 받기';
    sliderNotice.innerText = '전화번호가 호출자에게 노출됩니다.';
  } else {
    sliderLabel.innerText = '알림으로 받기';
    sliderNotice.innerText = '알림을 통해 연락을 받습니다.';
  }
})
