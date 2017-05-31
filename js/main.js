import Board from './board';

document.addEventListener("DOMContentLoaded", () => {

  const sound_board = new Board();

  let playing = true;
  let curCol = 0;
  let curTempo = 140;

  const Stop = () => {
    playing = false;
  };

  const Pause = () => {

  };

  const Reset = () => {
    curCol = 0;
  };

  const Play = () => {
    let slider = $("li.col_" + curCol);
    slider.addClass("active");
    slider.each((idx, beat) => {
      const audio = $('#'+jQuery.data(beat).id)[0];
      if (jQuery(beat).hasClass("on")) {
        audio.play();
      }
    });
    curCol++;

    setTimeout(() => {
      slider.removeClass("active");
    }, 300);

    if (curCol > 15) {
      curCol = 0;
    }
  };

  $("#pause").click(() => {
    console.log('hi');
    playing = false;
  });

  if ( playing === true ) {
    setInterval(Play, 300);
    $("#play").addClass("off");
    $("#volume").addClass("off");
  } else if ( playing === false ) {
    setInterval();
  }


});

// adjust tempo
// swap sounds
// save track
// use web api
