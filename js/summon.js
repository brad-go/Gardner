const summonLoader = document.querySelector('.summon-loader');
const summonLoaderText = document.querySelector('.summon-loader__inner');
const loadingText = document.querySelector('.summon-text__onLoaing');
const loadedText = document.querySelector('.summon-text__onLoaded');
const resummonBtn = document.querySelector('.btn-resummon');

const HIDDEN_SUMMON = 'hidden';
const SUMMON_LOADER = 'summon-loader';
const SUMMON_LOADING = 'summon-loading';
const SUMMON_LOADED = 'summon-loaded';

// 호출 버튼 클릭 시 동작
summonLoader.addEventListener('click', () => {
  summonLoader.classList.remove(SUMMON_LOADER);
  summonLoader.classList.add(SUMMON_LOADING);
  summonLoaderText.classList.add(HIDDEN_SUMMON);
  // 1.5초의 로딩 후에 호출 완료 알리기
  setTimeout(() => {
    summonLoader.classList.remove(SUMMON_LOADING);
    summonLoader.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN_SUMMON);
    loadedText.classList.remove(HIDDEN_SUMMON);
    resummonBtn.classList.remove(HIDDEN_SUMMON);
  }, 1500);
})

// 재호출 버튼 클릭 시 동작
resummonBtn.addEventListener('click', () => {
  summonLoader.classList.remove(SUMMON_LOADED);
  summonLoader.classList.add(SUMMON_LOADING);
  resummonBtn.classList.add(HIDDEN_SUMMON);
  setTimeout(() => {
    summonLoader.classList.remove(SUMMON_LOADING);
    summonLoader.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN_SUMMON);
    loadedText.classList.remove(HIDDEN_SUMMON);
    resummonBtn.classList.remove(HIDDEN_SUMMON);
  }, 1500);
})
