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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _sound = __webpack_require__(3);

var _sound2 = _interopRequireDefault(_sound);

var _slider = __webpack_require__(4);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {

  var soundBoard = new _board2.default();
  var activeSlider = new _slider2.default();

  var $audio = $("audio");
  $("#volume").addClass("off");
  $("#play").addClass("off");

  var playing = true;

  $("#pause").click(function () {
    playing = false;
    $("#pause").addClass("off");
    $("#play").removeClass("off");
  });

  $("#play").click(function () {
    playing = true;
    $("#play").addClass("off");
    $("#pause").removeClass("off");
  });

  $("#reset").click(function () {
    activeSlider.reset();
  });

  $("#mute").click(function () {
    $audio.addClass("muted");
    $("#volume").removeClass("off");
    $("#mute").addClass("off");
  });

  $("#volume").click(function () {
    $audio.removeClass("muted");
    $("#volume").addClass("off");
    $("#mute").removeClass("off");
  });

  var play = setInterval(function () {
    if (playing === true) {
      activeSlider.init();
    } else if (playing === false) {
      clearInterval();
    }
  }, 300);
});

// adjust tempo
// swap sounds
// save track
// use web api

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
/* 3 */
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
/* 4 */
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
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      var slider = $("li.col_" + this.curCol);
      slider.addClass("active");
      slider.each(function (idx, beat) {
        var audio = $('#' + jQuery.data(beat).id)[0];
        if (jQuery(beat).hasClass("on") && $("audio").hasClass("muted") === false) {
          audio.play();
        }
      });
      this.curCol++;

      setTimeout(function () {
        return slider.removeClass("active");
      }, 300);

      if (this.curCol > 15) {
        this.curCol = 0;
      }
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map