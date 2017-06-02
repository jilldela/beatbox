class Slider {
  constructor() {
    this.curCol = 0;
    this.stopPlay = this.stopPlay.bind(this);
  }

  init(tempo) {
    let slider = $(`li.col_${this.curCol}`);
      slider.addClass("active");
      slider.each((idx, beat) => {
        const audio = $(`#${jQuery.data(beat).id}`)[0];
        if (jQuery(beat).hasClass("on") && $("audio").hasClass("muted") === false) {
          this.stopPlay(audio);
          audio.play();
        }
      });
    this.curCol++;

      setTimeout(() => slider.removeClass("active"), tempo);

      if (this.curCol > 15) {
        this.curCol = 0;
      }
  }

  stopPlay(sound) {
    sound.pause();
    sound.currentTime = 0.0;
    // const $audio = $("audio");
    // $audio.each((idx, audio) => {
    //   audio.pause();
    //   audio.currentTime = 0;
    // });
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
