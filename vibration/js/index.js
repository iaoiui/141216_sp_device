{
  const FPS = 60;

  let setIntervalId;
  let bu = $('#font_1');
  let ru = $('#font_2');
  let tsu = $('#font_3');

  $(window).on('touchend', touchendHandler);

  function touchendHandler() {
    // 2秒間
    const DURATION = 2000;
    // バイブレーション
    navigator.vibrate(DURATION);
    startTxtAnime();
    setTimeout(stopTxtAnime, DURATION);
  }

  function startTxtAnime() {
    stopTxtAnime();

    setIntervalId = setInterval(txtUpdate, FPS / 1000);
  }

  function stopTxtAnime() {
    if (setIntervalId) clearInterval(setIntervalId);

    bu.css({transform: `translate(0px, 0px)`});
    ru.css({transform: `translate(0px, 0px)`});
    tsu.css({transform: `translate(0px, 0px)`});
  }

  function txtUpdate() {
    const l = 10;
    bu.css({
      transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
    });

    ru.css({
      transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
    });

    tsu.css({
      transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
    });
  }
}
