const summonBtn = document.querySelector('.summon-loader');
const summonBtnText = document.querySelector('.summon-loader__inner');
const loadingText = document.querySelector('.summon-text__onLoaing');
const loadedText = document.querySelector('.summon-text__onLoaded');
const resummonBtn = document.querySelector('.btn-resummon');

const HIDDEN = 'hidden';
const SUMMON_LOADER = 'summon-loader';
const SUMMON_LOADING = 'summon-loading';
const SUMMON_LOADED = 'summon-loaded';

summonBtn.addEventListener('click', () => {
  summonBtn.classList.remove(SUMMON_LOADER);
  summonBtn.classList.add(SUMMON_LOADING);
  summonBtnText.classList.add('page-hidden');
  // 2초의 로딩 후에 호출 완료 알리기
  setTimeout(() => {
    summonBtn.classList.remove(SUMMON_LOADING);
    summonBtn.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN);
    loadedText.classList.remove(HIDDEN);
    resummonBtn.classList.remove(HIDDEN);
  }, 2000);
})

resummonBtn.addEventListener('click', () => {
  summonBtn.classList.remove(SUMMON_LOADED);
  summonBtn.classList.add(SUMMON_LOADING);
  resummonBtn.classList.add(HIDDEN);
  setTimeout(() => {
    summonBtn.classList.remove(SUMMON_LOADING);
    summonBtn.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN);
    loadedText.classList.remove(HIDDEN);
    resummonBtn.classList.remove(HIDDEN);
  }, 2000);
})
