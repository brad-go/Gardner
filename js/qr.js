var canvasElement = document.getElementById("canvas");
var loadingMessage = document.getElementById("loadingMessage");
// var outputContainer = document.getElementById("output");
// var outputMessage = document.getElementById("outputMessage");
// var outputData = document.getElementById("outputData");

// const qrPage = document.querySelector('.qr-page');
const summonPage = document.querySelector('.summon-page');
const notice = document.querySelector('.qr-header__title');

var canvas = canvasElement.getContext("2d");
var video = document.createElement("video");

// function drawLine(begin, end, color) {
//   canvas.beginPath();
//   canvas.moveTo(begin.x, begin.y);
//   canvas.lineTo(end.x, end.y);
//   canvas.lineWidth = 4;
//   canvas.strokeStyle = color;
//   canvas.stroke();
// }

// Use facingMode: environment to attemt to get the front camera on phones
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
});

function tick() {
  loadingMessage.innerText = "⌛ 스캔 기능을 활성화 중입니다."
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;
    // outputContainer.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code) {
      notice.innerText = '차량이 조회되었습니다.';
      setTimeout(() => {
        qrPage.classList.add('page-hidden');
        summonPage.classList.remove('page-hidden');
      }, 2000);
      
    } else {
      setTimeout(() => {
        notice.innerText = '차량 조회에 실패하였습니다. 다시 시도해주세요.'
      }, 5000);
    }
  }
  requestAnimationFrame(tick);
}