const buttons = document.querySelectorAll('.categories-wrap button');

for(let button of buttons) {
  button.addEventListener('click', (e) => {
    const img = e.target;
    const newImg = e.target.nextElementSibling;
    
    img.classList.add('hidden');
    newImg.classList.remove('hidden');
  
    newImg.addEventListener('click', () => {
      newImg.classList.add('hidden');
      img.classList.remove('hidden');
    })
  })
}

// button들을 한 번에 가져와서 
// 클릭된 버튼을 고르기
// 클릭된 버튼의 이미지를 숨겨놓은 이미지와 바꾸기
// 토글을 이용해서 바꾸려고 했는데, 이미지는 바뀌지만 바뀐 상태에서
// 원래대로 돌리려고 하면, 이미지가 사라져 버린다. 
// 동작은 한다. 그러나 바뀐 이미지를 원래 이미지로 되돌릴 때
// 콘솔 창에 오류가 보인다. 오류의 이유를 알 수 없다. 