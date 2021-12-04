const summonBtn = document.querySelector('.btn-summon');
const summonBtnText = document.querySelector('.btn-summon__inner');
const loadingText = document.querySelector('.summon-text__onLoaing');
const loadedText = document.querySelector('.summon-text__onLoaded');
const resummonBtn = document.querySelector('.btn-resummon');

summonBtn.addEventListener('click', () => {
  summonBtn.classList.remove('btn-summon');
  summonBtn.classList.add('summon-loader');
  summonBtnText.classList.add('page-hidden');
  // 2초의 로딩 후에 호출 완료 알리기
  setTimeout(() => {
    summonBtn.classList.remove('summon-loading');
    summonBtn.classList.add('summon-loaded');
    loadingText.classList.add('hidden');
    loadedText.classList.remove('hidden');
    resummonBtn.classList.remove('hidden');
  }, 2000);
})

resummonBtn.addEventListener('click', () => {
  summonBtn.classList.remove('summon-loaded');
  summonBtn.classList.add('summon-loading');
  resummonBtn.classList.add('hidden');
  setTimeout(() => {
    summonBtn.classList.remove('summon-loading');
    summonBtn.classList.add('summon-loaded');
    loadingText.classList.add('hidden');
    loadedText.classList.remove('hidden');
    resummonBtn.classList.remove('hidden');
  }, 2000);
})
