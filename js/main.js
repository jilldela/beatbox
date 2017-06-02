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
  const $tempo = $("#tempo");

  $volume.addClass("off");
  $play.addClass("off");

  let playing = true;
  let tempo = $("input").val();
  console.log(tempo);

  $tempo.change((e) => {
    console.log(e.currentTarget.value);
    tempo = 1300 - e.currentTarget.value;
  });


  $pause.click(() => {
    clearInterval(playLoop);
    playing = false;
    $pause.addClass("off");
    $play.removeClass("off");
  });

  $play.click(() => {
    playing = true;
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
      playLoop = setTimeout(() => {
          activeSlider.init(tempo);
          if (playing) {
            play();
          }
        }, tempo);
    };

    play();

});

// swap sounds
// save track
