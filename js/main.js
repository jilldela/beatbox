import Board from './board';
import Sound from './sound';
import Slider from './slider';

document.addEventListener("DOMContentLoaded", () => {

  const soundBoard = new Board();
  const activeSlider = new Slider();

  let playing = true;

  $("#pause").click(() => {
    playing = false;
  });

  $("#play").click(() => {
    playing = true;
  });

  $("#reset").click(() => {
    activeSlider.reset();
  });

  $("#mute").click(() => {
    const $audio = $("audio");
    $audio.toggleClass("muted");
    if ($audio.hasClass("muted")) {
      $audio.muted = true;
    } else {
      $audio.muted = false;
    }
  });

    setInterval(() => {
      if ( playing === true ) {
        activeSlider.play();
        $("#play").addClass("off");
        $("#volume").addClass("off");
        $("#pause").removeClass("off");
      } else if ( playing === false ) {
        clearInterval();
        $("#play").removeClass("off");
        $("#pause").addClass("off");
      }
    }, 300);


});

// adjust tempo
// swap sounds
// save track
// use web api
