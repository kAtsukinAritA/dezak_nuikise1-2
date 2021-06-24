

let intervalId;
let image = document.getElementById('targetImage');
image.onclick = changeImage;

function changeImage(){

  if(image.style.opacity == ''){
    image.style.opacity = 1;
  }

  let opacityInt = image.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId = setInterval( () => {
    opacityInt = opacityInt - 10;
    image.style.opacity = opacityInt / 100;

    if(image.style.opacity <= 0){
      clearInterval(intervalId);
}
setTimeout(function(){
window.location = "main.html"  // 0.8秒後に取得したURLに遷移
}, 1000);
// <img src="images/sitemain.png" width="maxWidth" height="center"id="targetImage">
  }, 100);
}


// <a href="two.html" class="navigate-anchor">Move to Next Page</a>
