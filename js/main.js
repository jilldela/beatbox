import Board from './board';
import Sound from './sound';
import Slider from './slider';

document.addEventListener("DOMContentLoaded", () => {

  const soundBoard = new Board();
  const activeSlider = new Slider();

  let playing = true;
  $("#volume").addClass("off");

  $("#pause").click(() => {
    playing = false;
  });

  $("#play").click(() => {
    playing = true;
  });

  $("#reset").click(() => {
    activeSlider.reset();
  });

  const $audio = $("audio");

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
        activeSlider.play();
        $("#play").addClass("off");
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
