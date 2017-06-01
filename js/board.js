class Board {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const CELLS = 16;
    //create row for each beat
    $(".beats").children().each( (idx, beat) => {
        const $ul = $( '<ul class="'+ beat.id +' beat-row">');
        //create cell for each row with mousedown event handler
        for (let i = 0; i < CELLS; i++) {
          const $li = $( '<li class="col_'+ i +' '+ beat.id +'">');
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
