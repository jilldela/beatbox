// const BEATS = [
//   '../beats/KickFuture01.wav',
//   '../beats/SnareFuture02.wav',
//   '../beats/ClapsFuture07.wav',
//   '../beats/MustardFXTom1.wav',
//   '../beatsMustardHat07.wav'
// ];

class Board {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const CELLS = 16;
    //create row for each beat
    $(".beats").children().each( (idx, beat) => {
        const $ul = $( `<ul class="${beat.id} beat-row">`);
        //create cell for each row with mousedown event handler
        $(`<li class="${beat}-button">`);

        for (let i = 0; i < CELLS; i++) {
          const $li = $( `<li class="col_${i} ${beat.id}">`);
          $li.data(beat, 'sound');

          $li.mousedown(() => {
            $li.toggleClass("on");
            if ($li.hasClass("on") && $("audio").hasClass("muted") === false) {
              beat.play();
            }
          });

          $ul.append($li);
        }

      $ul.appendTo(".beatbox");
    });
  }



 }

export default Board;
