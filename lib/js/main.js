import Board from './board';
import Slider from './slider';
import anime from 'animejs';

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

  $tempo.change((e) => {
    tempo = 1150 - e.currentTarget.value;
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

    var cssSelector = anime({
      targets: '#cssSelector .el',
      rotate: 360,
      translateX: -300,
      delay: 1000,
      easing: 'easeInOutQuart'
    });
  //
  // const buzz = new Audio('./lib/beats/MustardVoxOnTheBeat.wav');
  // buzz.play();

  play();

});

// TODO: BONUS MVPs
// swap sounds
// save track
