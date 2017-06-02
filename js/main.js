import Board from './board';
import Sound from './sound';
import Slider from './slider';

document.addEventListener("DOMContentLoaded", () => {

  const soundBoard = new Board();
  const activeSlider = new Slider();

  const $audio = $("audio");
  const $volume = $("#volume");
  const $mute = $("#mute");
  const $play = $("#play");
  const $pause = $("#pause");

  $volume.addClass("off");
  $play.addClass("off");

  $pause.click(() => {
    clearInterval(playLoop);
    $pause.addClass("off");
    $play.removeClass("off");
  });

  $play.click(() => {
    play();
    $play.addClass("off");
    $pause.removeClass("off");
  });

  $("#reset").click(() => {
    activeSlider.reset();
  });

  $mute.click(() => {
    $audio.addClass("muted");
    $volume.removeClass("off");
    $mute.addClass("off");
  });

  $volume.click(() => {
    $audio.removeClass("muted");
    $volume.addClass("off");
    $mute.removeClass("off");
  });

  let playLoop;

    const play = () => {
      playLoop = setInterval(() => {
          activeSlider.init();
        }, 300);
    };

    play();

    // if (playing===true) {
    //   let play = setInterval(() => {
    //     activeSlider.init();
    //   }, 300);
    // } else if (playing===false) {
    //   clearInterval(play);
    // }

});

// adjust tempo
// swap sounds
// save track
// use web api
