let $zo = $('#zo');
window.addEventListener(
  'deviceorientation',
  deviceOrientationHandler);

/** デバイスが傾いたときのイベントです。 */
function deviceOrientationHandler(event) {
  //ジャイロセンサー情報取得
  // X軸
  const beta = event.beta;
  // Y軸
  const gamma = event.gamma;
  // Z軸
  const alpha = event.alpha;
  let html = ``;
  html += 'X回転 : ' + beta + '<br>';
  html += 'Y回転 : ' + gamma + '<br>';
  html += 'Z回転 : ' + alpha;
  $('#debug').html(html);

  $zo.css({
    'transform': 'rotateX(' + (180 + beta) + 'deg) rotateY(' + (180 + gamma) + 'deg) rotateZ(' + alpha + 'deg)'
  });
}
