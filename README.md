# beatbox

[live beatbox](https://jilldela.github.io/beatbox/)

## Background

beatbox is a soundboard/beat-making app created using JavaScript, jQuery, HTML/CSS, and anime.js.

## Implementation

beatbox uses JavaScript and jQuery to create a soundboard that loops through playing different beats.

``` javascript
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
```

The slider sets the tempo with `setTimeout` based on the selected tempo.

``` javascript
const play = () => {
  playLoop = setTimeout(() => {
      activeSlider.init(tempo);
      if (playing) {
        play();
      }
    }, tempo);
};
```

## Demo

Each cell has the ability to toggle play on or off. When toggled on, the beat will play at tempo as the slider loops through the board. User can increase and decrease tempo, pause, mute and reset the board.
![](assets/fulldemo.gif)

## Future Features

When I get a chance, I plan to implement the following features:

* Switch beats/sounds
* Record tracks
