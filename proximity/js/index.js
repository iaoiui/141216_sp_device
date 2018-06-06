const textNear = $('#font_1');
const textFar = $('#font_2');

window.addEventListener('deviceproximity', deviceProximityHandler);

/** 検知範囲の状況が変化したときのイベントです。 */
function deviceProximityHandler(event) {
  if (!event.value) {
    // センサーの検知範囲に物体がある
    showNear();
  } else {
    // センサーの検知範囲に物体はない
    showFar();
  }
}

// 近
function showNear() {
  textFar
    .stop()
    .transition({scale: 0});
  textNear
    .stop()
    .css({display: 'block', scale: 1.5})
    .transition({scale: 1}, 500, 'easeOutCubic');
}

// 遠
function showFar() {
  textFar
    .stop()
    .transition({scale: 1});
  textNear
    .stop()
    .transition({scale: 1.5}, 200, 'easeInCubic', function () {
      $(this).css({display: 'none'});
    });
}
