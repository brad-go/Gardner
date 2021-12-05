const slider = document.querySelector('#checkbox')
const sliderLabel = document.querySelector('.slider-label');
const sliderNotice = document.querySelector('.slider-notice');

sliderLabel.innerText = '알림으로 받기';
sliderNotice.innerText = '알림을 통해 상대방에게 연락합니다.';

slider.addEventListener('click', () => {
  let checked = slider.checked;
  if (checked) {
    sliderLabel.innerText = '전화로 받기';
    sliderNotice.innerText = '전화번호가 호출자에게 노출됩니다.';
  } else {
    sliderLabel.innerText = '알림으로 받기';
    sliderNotice.innerText = '알림을 통해 상대방에게 연락합니다.';
  }
})

// 12 / 4
// slider의 css를 설정하는데 어려웠다. 

// 12 /5 
// 기존에는 두 개의 p태그를 클래스를 이용해서 변경했는데, 
// slider 변경된 값을 구해서 p태그를 하나만 사용해서 안의 내용을 변경했다. 
