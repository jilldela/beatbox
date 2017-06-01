import Board from './board';
import Sound from './sound';
import Slider from './slider';

document.addEventListener("DOMContentLoaded", () => {

  const soundBoard = new Board();
  const activeSlider = new Slider();

  const $audio = $("audio");
  $("#volume").addClass("off");
  $("#play").addClass("off");

  let playing = true;

  $("#pause").click(() => {
    playing = false;
    $("#pause").addClass("off");
    $("#play").removeClass("off");
  });

  $("#play").click(() => {
    playing = true;
    $("#play").addClass("off");
    $("#pause").removeClass("off");
  });

  $("#reset").click(() => {
    activeSlider.reset();
  });

  $("#mute").click(() => {
    $audio.addClass("muted");
    $("#volume").removeClass("off");
    $("#mute").addClass("off");
  });

  $("#volume").click(() => {
    $audio.removeClass("muted");
    $("#volume").addClass("off");
    $("#mute").removeClass("off");
  });

    const play = setInterval(() => {
      if ( playing === true ) {
        activeSlider.init();
      } else if ( playing === false ) {
        clearInterval();
      }
    }, 300);


});

// adjust tempo
// swap sounds
// save track
// use web api
