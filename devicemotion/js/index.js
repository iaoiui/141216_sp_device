const $arrow = $('#arrow');
let stageW;
let stageH;

let isMotion = false;

window.addEventListener('resize', resizeHandler);
resizeHandler();

// DeviceMotion Event
window.addEventListener('devicemotion', deviceMotionHandler);

// 加速度が変化
function deviceMotionHandler(event) {
  if (isMotion) return;

  // 加速度
  // X軸
  const x = event.acceleration.x;
  // Y軸
  const y = event.acceleration.y;
  // Z軸
  const z = event.acceleration.z;

  $arrow.stop();

  let l = 7;
  if (x > l) { // 右
    $arrow.css({
      x: -stageW
    });
    $arrow.children('img').css({
      'transform': 'rotate(90deg)'
    });
  }
  else if (x < -l) { // 左
    $arrow.css({
      x: stageW
    });
    $arrow.children('img').css({
      'transform': 'rotate(-90deg)'
    });
  }
  else if (y > l) { // 上
    $arrow.css({
      y: stageH
    });
    $arrow.children('img').css({
      'transform': 'rotate(0deg)'
    });
  }
  else if (y < -l) { // 下
    $arrow.css({
      y: -stageH
    });
    $arrow.children('img').css({
      'transform': 'rotate(180deg)'
    });
  }
  else return;

  isMotion = true;

  $arrow.delay(500).transition(
    {x: 0, y: 0}, 300, 'easeOutCubic', () => {
      isMotion = false;
    });
}

function resizeHandler(event) {
  stageW = window.innerWidth;
  stageH = window.innerHeight;
}
