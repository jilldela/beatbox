class Slider {
  constructor() {
    this.curCol = 0;
  }

  init(tempo) {
    let slider = $(`li.col_${this.curCol}`);
      slider.addClass("active");
      slider.each((idx, beat) => {
        const audio = $(`#${jQuery.data(beat).id}`)[0];
        if (jQuery(beat).hasClass("on") && $("audio").hasClass("muted") === false) {
          audio.play();
        }
      });
    this.curCol++;

      setTimeout(() => slider.removeClass("active"), tempo);

      if (this.curCol > 15) {
        this.curCol = 0;
      }
  }

  reset() {
    this.curCol = 0;
    let $li = $("li");
    if ($li.hasClass("on")) {
      $li.removeClass("on");
    }
  }



}

export default Slider;
