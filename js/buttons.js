// pages
const pageNodes = document.querySelectorAll('.page');
const mainPage = document.querySelector('#mainPage');
const qrPage = document.querySelector('#qrPage');
const summonPage = document.querySelector('#summonPage');
// btns
const scanBtn = document.querySelector('#btnScan');
const buttons = document.querySelectorAll('.categories-wrap button');
const noticeBtn = document.querySelectorAll('.btn-call-notice');
// imgs
const homeImgs = document.querySelectorAll('.btn-home img');
// others
const noticeBox = document.querySelector('.call-notice');

// text
const HIDDEN = 'hidden';
const BTN_HOME = 'btn-home';

// page들을 배열 pages에 집어넣기
const pages = [];

for (let i =0; i < pageNodes.length; i++) {
  pages[i] = pageNodes[i];
}

// footer를 위한 page들을 위한 배열이므로 log-in 페이지 없애기 
pages.shift();

///////////////////// footer Btns /////////////////////

const handleFooterBtns = (button) => {
// 한 버튼을 클릭하면 나머지 버튼들이 클릭해제 되도록 한다. 
  const footerBtns = button.parentNode.children;
  for (let footerBtn of footerBtns) {
  if (footerBtn.className !== button.className) {
      // 홈일 경우만 다르게 실행해준다. 
      if (footerBtn.className === BTN_HOME) {
        footerBtn.childNodes[1].childNodes[3].classList.remove(HIDDEN);
        footerBtn.childNodes[1].childNodes[1].classList.add(HIDDEN);
      } else {
        footerBtn.childNodes[1].childNodes[1].classList.remove(HIDDEN);
        footerBtn.childNodes[1].childNodes[3].classList.add(HIDDEN);
      }
    }
  }
}

// button을 클릭할 때마다 img가 바뀌게
const handleBtnImages = (button) => {
  const currentImg = button.childNodes[1].childNodes[1];
  const nextImg = button.childNodes[1].childNodes[3];

  currentImg.classList.toggle(HIDDEN);
  nextImg.classList.toggle(HIDDEN);
}

// button을 클릭할 때마다 page가 바뀌게
const handlePageBtn = (button) => {
  const btnName = button.className;
  const pageLen = mainPage.classList.length;

  // 각 버튼에 해당하는 페이지를 보여주는 조건문
  // classList에 page-hidden이 포함되지 않은 경우, 기존 페이지를 유지 
  if (pageLen > 1) {
    if (btnName === BTN_HOME) {
      pages.forEach((page) => {
        page.classList.add(HIDDEN);
      })
      mainPage.classList.remove(HIDDEN);
    } else if (btnName === 'btn-records') {
      pages.forEach((page) => {
        page.classList.add(HIDDEN);
      })
      recordPage.classList.remove(HIDDEN);
    } else if (btnName === 'btn-qr') {
      pages.forEach((page) => {
        page.classList.add(HIDDEN);
      })
      qrPage.classList.remove(HIDDEN);
    } else if (btnName === 'btn-summon') {
      pages.forEach((page) => {
        page.classList.add(HIDDEN);
      })
      summonPage.classList.remove(HIDDEN);
    } else {
      pages.forEach((page) => {
        page.classList.add(HIDDEN);
      })
      userPage.classList.remove(HIDDEN);
      noticeBox.classList.remove(HIDDEN);
    }
  }
}

// observer를 구현하고 감지되면 행할 함수
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (summonPage.classList.length === 2) {
      summonLoader.classList.add(SUMMON_LOADER);
      summonLoader.classList.remove(SUMMON_LOADING);
      summonLoader.classList.remove(SUMMON_LOADED);
      summonLoaderText.classList.remove(HIDDEN)
      loadingText.classList.remove(HIDDEN_SUMMON);
      loadedText.classList.add(HIDDEN_SUMMON);
      resummonBtn.classList.add(HIDDEN_SUMMON);
      handleBtnImages(buttons[3]);
      handleBtnImages(buttons[2]);
      // observer 종료
      observer.disconnect();
    }
  });
});

// observer가 감지할 옵션
const config = { attributes: true };

// observer가 감지할 타겟과 옵션
observer.observe(summonPage, config);

// observer가 인식되면 종료하기 때문에 다른 버튼을 클릭해서
// 페이지 이동이 일어나면 다시 observer를 시작하게 했다. 
const handleObserver = (button) => {
  if (button.className !== 'btn-summon') {
    observer.observe(summonPage, config);
  }
}

// 버튼들을 클릭했을 때 이벤트를 발생시킨다. 
for(let button of buttons) {
  button.addEventListener('click', (e) => {
    // button의 첫 번째 img가 가진 클래스의 길이를 구한다. 
    const imgLen = button.childNodes[1].childNodes[1].classList.length;
    // 홈 버튼의 경우 처음부터 클릭된 버튼이므로 반대로 해준다. 
    if (button.className === BTN_HOME) {
      if (imgLen === 2) {
        handleBtnImages(button);
        handleFooterBtns(button);
        handlePageBtn(button);
      }
    } else {
      if (imgLen !== 2) {
        handleBtnImages(button);
        handleFooterBtns(button);
        handlePageBtn(button);
      }
    }
    handleObserver(button);
  })
}

///////////////////// scan Btn /////////////////////

// scan button을 클릭하면 main-page 사라지고 qr-page 보이기
// home 버튼의 이미지 바꿔주기 
scanBtn.addEventListener('click', () => {
  mainPage.classList.add(HIDDEN);
  qrPage.classList.remove(HIDDEN);
  // 인자로 홈버튼 넘기기
  handleBtnImages(buttons[0]);
  handleBtnImages(buttons[2]);
})

///////////////////// notice Btn /////////////////////

const confirmBtn = noticeBtn[1];

confirmBtn.addEventListener('click', () => {
  noticeBox.classList.add(HIDDEN);
})



// 12 / 4 토
// button들을 한 번에 가져와서 
// 클릭된 버튼을 고르기
// 클릭된 버튼의 이미지를 숨겨놓은 이미지와 바꾸기
// 토글을 이용해서 바꾸려고 했는데, 이미지는 바뀌지만 바뀐 상태에서
// 원래대로 돌리려고 하면, 이미지가 사라져 버린다. 
// 동작은 한다. 그러나 바뀐 이미지를 원래 이미지로 되돌릴 때
// 콘솔 창에 오류가 보인다. 오류의 이유를 알 수 없다. 

// 12 / 5 일
// button이 눌려있을 때는 버튼의 이미지와 페이지가 바뀌지 않게 하기
// button 하나를 누르면 나머지는 선택 해제 되게하기
// home-button에만 반대로 적용해주기
// 각 버튼을 눌렀을 때 해당하는 페이지 보여주기 -> 로직 좀 더 쉽게 가능?
// observer를 통해서 page가 이동했을때(클래스가 변경되었을 때) 
// btn-qr과 btn-summon의 img focus를 변경해준다. 


