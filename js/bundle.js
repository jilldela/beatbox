/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BEATS = ['../beats/KickFuture01.wav', '../beats/SnareFuture02.wav', '../beats/ClapsFuture07.wav', '../beats/MustardFXTom1.wav', '../beatsMustardHat07.wav'];

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.createGrid();
  }

  _createClass(Board, [{
    key: 'createGrid',
    value: function createGrid() {
      var CELLS = 16;
      //create row for each beat
      $(".beats").children().each(function (idx, beat) {
        var $ul = $('<ul class="' + beat.id + ' beat-row">');
        //create cell for each row with mousedown event handler
        $('<li class="' + beat + '-button">');

        var _loop = function _loop(i) {
          var $li = $('<li class="col_' + i + ' ' + beat.id + '">');
          $li.data(beat, 'sound');

          $li.mousedown(function () {
            $li.toggleClass("on");
            if ($li.hasClass("on") && $("audio").hasClass("muted") === false) {
              beat.play();
            }
          });

          $ul.append($li);
        };

        for (var i = 0; i < CELLS; i++) {
          _loop(i);
        }

        $ul.appendTo(".beatbox");
      });
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.curCol = 0;
    this.stopPlay = this.stopPlay.bind(this);
  }

  _createClass(Slider, [{
    key: "init",
    value: function init(tempo) {
      var _this = this;

      var slider = $("li.col_" + this.curCol);
      slider.addClass("active");
      slider.each(function (idx, beat) {
        var audio = $("#" + jQuery.data(beat).id)[0];
        if (jQuery(beat).hasClass("on") && $("audio").hasClass("muted") === false) {
          _this.stopPlay();
          audio.play().catch(function (e) {
            console.log(e);
          });
        }
      });
      this.curCol++;

      setTimeout(function () {
        return slider.removeClass("active");
      }, tempo);

      if (this.curCol > 15) {
        this.curCol = 0;
      }
    }
  }, {
    key: "stopPlay",
    value: function stopPlay() {
      var $audio = $("audio");
      $audio.each(function (idx, audio) {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.curCol = 0;
      var $li = $("li");
      if ($li.hasClass("on")) {
        $li.removeClass("on");
      }
    }
  }]);

  return Slider;
}();

exports.default = Slider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.context = new AudioContext() || new webkitAudioContext();
    this.source = null;
    this.audioBuffer = [];

    this.initSound = this.initSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }

  _createClass(Sound, [{
    key: 'stopSound',
    value: function stopSound() {
      if (this.source) {
        this.source.noteOff(0);
      }
    }
  }, {
    key: 'playSound',
    value: function playSound() {
      // source is global so we can call .noteOff() later.
      this.source = context.createBufferSource();
      this.source.buffer = this.audioBuffer;
      this.source.loop = false;
      this.source.connect(context.destination);
      this.source.noteOn(0); // Play immediately.
    }
  }, {
    key: 'initSound',
    value: function initSound(arrayBuffer) {
      var _this = this;

      context.decodeAudioData(arrayBuffer, function (buffer) {
        // audioBuffer is global to reuse the decoded audio later.
        _this.audioBuffer.push(buffer);
        console.log(_this.audioBuffer);
      }, function (e) {
        console.log('Error decoding file', e);
      });
    }

    // Load file from a URL as an ArrayBuffer.
    // Example: loading via xhr2: loadSoundFile('sounds/test.mp3');

  }, {
    key: 'loadSoundFile',
    value: function loadSoundFile(url) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function (e) {
        _this2.initSound(_this2.response); // this.response is an ArrayBuffer.
      };
      xhr.send();
    }
  }]);

  return Sound;
}();

exports.default = Sound;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(0);

var _board2 = _interopRequireDefault(_board);

var _sound = __webpack_require__(2);

var _sound2 = _interopRequireDefault(_sound);

var _slider = __webpack_require__(1);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {

  var soundBoard = new _board2.default();
  var activeSlider = new _slider2.default();

  var $audio = $("audio");
  var $volume = $("#volume");
  var $mute = $("#mute");
  var $play = $("#play");
  var $pause = $("#pause");
  var $tempo = $("#tempo");

  $volume.addClass("off");
  $play.addClass("off");

  var playing = true;
  var tempo = $("input").val();

  $tempo.change(function (e) {
    tempo = 1100 - e.currentTarget.value;
  });

  $pause.click(function () {
    clearInterval(playLoop);
    playing = false;
    $pause.addClass("off");
    $play.removeClass("off");
  });

  $play.click(function () {
    playing = true;
    play();
    $play.addClass("off");
    $pause.removeClass("off");
  });

  $("#reset").click(function () {
    activeSlider.reset();
  });

  $mute.click(function () {
    $audio.addClass("muted");
    $volume.removeClass("off");
    $mute.addClass("off");
  });

  $volume.click(function () {
    $audio.removeClass("muted");
    $volume.addClass("off");
    $mute.removeClass("off");
  });

  var playLoop = void 0;

  var play = function play() {
    playLoop = setTimeout(function () {
      activeSlider.init(tempo);
      if (playing) {
        play();
      }
    }, tempo);
  };

  play();
});

// TODO:
//.DS_Store
// Production README

// TODO: BONUS MVPs
// swap sounds
// save track

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map