(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/akw.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/akw.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/js/utility/mixins.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "akw",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"]],
  computed: {
    AkwDead: function AkwDead() {
      return this.$store.getters.getAkwDead;
    }
  },
  data: function data() {
    return {
      CounterNumber: 0
    };
  },
  watch: {
    AkwDead: function AkwDead(newValue, oldValue) {
      var _this = this;

      setTimeout(function () {
        _this.counter(oldValue, newValue);
      }, 5000);
    }
  },
  methods: {
    counter: function counter(start, end) {
      var _this2 = this;

      var current = start;
      var increment = Math.round(end / 80);
      var timer = setInterval(function () {
        // current += this.RandomMinMaxNumber(100000, 150000);
        current += increment; // console.log(increment);

        _this2.CounterNumber = current; // console.log(this.CounterNumber);

        if (current === end || current >= end) {
          clearInterval(timer);
          _this2.CounterNumber = end;
        }
      }, 100);
    },
    RandomMinMaxNumber: function RandomMinMaxNumber(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/gauge.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/js/utility/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "gauge",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"]],
  props: {
    name: String,
    number: Number
  },
  data: function data() {
    return {
      style: "",
      CounterNumber: 0
    };
  },
  watch: {
    number: function number(newValue, oldValue) {
      // console.log(newValue, oldValue);
      // Pointer Up or Down
      var Pointer = this.HandleUpOrDown(newValue, oldValue); // Rotate Value

      var RotateValue = this.HandleRotate(newValue); // Counter

      this.counter(oldValue, newValue, 3, Pointer); // Set Style to Pointer

      this.style = " transform: rotate(" + RotateValue + "deg);";
    }
  },
  created: function created() {
    if (this.number <= 0) {
      this.style = " transform: rotate(" + -95 + "deg);";
    }
  },
  methods: {
    counter: function counter(start, end, duration, pointer) {
      var _this = this;

      var current = start;
      var range = end - start;
      range = range < 0 ? range * -1 : range;
      var increment = 1;
      var timer = setInterval(function () {
        increment = _this.HandleIncrement(start, end);

        if (pointer === "up") {
          current += increment;

          if (current === end || current >= end) {
            clearInterval(timer);
            _this.CounterNumber = end;
          } else {
            _this.CounterNumber = current;
          }
        }

        if (pointer === "down") {
          current -= increment;

          if (current === end || current <= end) {
            clearInterval(timer);
            _this.CounterNumber = end;
          } else {
            _this.CounterNumber = current;
          }
        }
      }, 100);
    },
    RandomMinMaxNumber: function RandomMinMaxNumber(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    HandleRotate: function HandleRotate(val) {
      var RotateValue;

      if (val < 1) {
        RotateValue = -95;
      }

      if (val === 1) {
        RotateValue = -93;
      }

      if (val >= 1) {
        RotateValue = -90;
      }

      if (val >= 10) {
        RotateValue = -88;
      }

      if (val >= 50) {
        RotateValue = -87;
      }

      if (val >= 100) {
        RotateValue = -86;
      }

      if (val >= 300) {
        RotateValue = -84;
      }

      if (val >= 600) {
        RotateValue = -82;
      }

      if (val >= 800) {
        RotateValue = -80;
      }

      if (val >= 1000) {
        RotateValue = -70;
      }

      if (val >= 1500) {
        RotateValue = -60;
      }

      if (val >= 3000) {
        RotateValue = -40;
      }

      if (val >= 6000) {
        RotateValue = -20;
      }

      if (val >= 10000) {
        RotateValue = 0;
      }

      if (val >= 20000) {
        RotateValue = 10;
      }

      if (val >= 50000) {
        RotateValue = 40;
      }

      if (val >= 200000) {
        RotateValue = 60;
      }

      if (val >= 400000) {
        RotateValue = 80;
      }

      if (val >= 2000000) {
        RotateValue = 90;
      }

      return RotateValue;
    },
    HandleUpOrDown: function HandleUpOrDown(newValue, oldValue) {
      var Pointer;

      if (newValue > oldValue) {
        Pointer = "up";
      }

      if (newValue < oldValue) {
        Pointer = "down";
      }

      return Pointer;
    },
    HandleIncrement: function HandleIncrement(startValue, endValue) {
      var range = endValue - startValue;
      range = range < 0 ? range * -1 : range;
      var increment = 1;

      if (range <= 30) {
        increment = 1;
      }

      if (range > 30) {
        var x = range / 30; // calculation increment

        increment = Math.round(x);
      } // console.log(increment);


      return increment;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/js/utility/mixins.js");
/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge */ "./resources/js/components/game/gauge.vue");
/* harmony import */ var _akw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./akw */ "./resources/js/components/game/akw.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "score",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"]],
  computed: {
    Infected: function Infected() {
      return this.$store.getters.getInfected;
    },
    Dead: function Dead() {
      return this.$store.getters.getDead;
    },
    AkwDead: function AkwDead() {
      return this.$store.getters.getAkwDead;
    }
  },
  components: {
    "v-gauge": _gauge__WEBPACK_IMPORTED_MODULE_1__["default"],
    "v-akw": _akw__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Game/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_game_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/score */ "./resources/js/components/game/score.vue");
/* harmony import */ var _components_layout_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/header/index */ "./resources/js/components/layout/header/index.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/js/utility/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Game",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_4__["scoreMixins"]],
  data: function data() {
    return {
      videoEnd: false,
      videoPause: false,
      ProgressStatus: "1",
      VideoSource: '/video/vid_1.mp4',
      PlayerName: null,
      PlayerNameError: false,
      VideoCurrentTime: null,
      GameTimer: null
    };
  },
  components: {
    'app-score': _components_game_score__WEBPACK_IMPORTED_MODULE_1__["default"],
    'app-header': _components_layout_header_index__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    storyLine: 'getStoryLineList',
    Timer: 'getTimer',
    elapsedTime: 'getElapsedTime'
  }),
  watch: {
    VideoCurrentTime: function VideoCurrentTime(newValue, oldValue) {}
  },
  created: function created() {
    // Create The Game
    this.VideoSource = this.storyLine[this.ProgressStatus].video;
    this.GameTimerStart();
  },
  methods: {
    // Show Option Interface
    OnEnd: function OnEnd() {
      this.videoEnd = true;
    },
    OnPause: function OnPause() {
      this.videoEnd = true;
    },
    OnStart: function OnStart() {
      this.videoEnd = false;
    },
    // Start Game Timer
    GameTimerStart: function GameTimerStart() {
      var _this = this;

      this.GameTimerStart = setInterval(function () {
        var Time = _this.$store.getters.getTimer;
        Time += 1;

        _this.$store.dispatch("handleChangeTimer", Time);

        var elapsedTime = _this.formattedElapsedTime(Time);

        _this.$store.dispatch("handleChangeElapsedTime", elapsedTime);
      }, 1100);
    },
    // Format Timer to hh:mm:ss
    formattedElapsedTime: function formattedElapsedTime(time) {
      var date = new Date(null);
      date.setSeconds(time / 1);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    // Check Video time for Options
    updateVideoTime: function updateVideoTime() {
      var Video = this.$refs.videoRef;
      var VideoDuration = this.$refs.videoRef.duration - this.storyLine[this.ProgressStatus].Overlay;
      var CurrentTime = this.$refs.videoRef.currentTime;
      var VideoType = this.storyLine[this.ProgressStatus].type;
      Video.volume = 1;
      Video.muted = false;

      if (VideoType === "question") {
        // console.log("question", VideoDuration + ' / ' + CurrentTime);
        if (VideoDuration <= CurrentTime) {
          // console.log("question 2 -- " + VideoDuration + '--' +CurrentTime);
          this.videoEnd = true;
          this.$refs.audioRef.muted = false;
          this.$refs.audioRef.volume = 1;
          this.$refs.audioRef.play();
        }
      } else if (VideoType === "continue" && Video.duration === CurrentTime) {
        var next = this.storyLine[this.ProgressStatus].continueStory.next; // console.log("Continue Video", next);

        this.nextProgress(next);
      } else {
        if (Video.duration === CurrentTime) {
          this.videoEnd = true;
        }
      }

      this.VideoCurrentTime = this.$refs.videoRef.currentTime;
    },
    // Next Step Story Line
    nextProgress: function nextProgress(val) {
      var _this2 = this;

      // Start Next Cutscene
      this.$refs.audioRef.pause();
      this.$refs.audioRef.currentTime = 0;
      setTimeout(function () {
        _this2.ProgressStatus = val;
        _this2.VideoSource = _this2.storyLine[val].video;

        _this2.$refs.videoRef.load();

        _this2.videoEnd = false;
      }, 500); // Check Delay Timer for Gauge

      if (this.storyLine[val].InfectedDelay) {
        setTimeout(function () {
          _this2.CalculateInfectionAndDead(val);
        }, this.storyLine[val].InfectedDelay);
      } else {
        this.CalculateInfectionAndDead(val);
      }

      if (this.storyLine[val].AKW) {
        this.CalculateAKW(val);
      }
    },
    // Calculate Infected People and Dead People Base of Min/Max Values
    CalculateInfectionAndDead: function CalculateInfectionAndDead(val) {
      var inf = this.storyLine[val].MinMaxInfected;
      var dead = this.storyLine[val].MinMaxDead;
      var InfectedPeople = this.RandomMinMaxNumber(inf[0], inf[1]);
      var DeadPeople = this.RandomMinMaxNumber(dead[0], dead[1]);
      this.$store.dispatch('handleChangeInfectedValue', InfectedPeople);
      this.$store.dispatch('handleChangeDeadValue', DeadPeople);
    },
    // Calculate AKW
    CalculateAKW: function CalculateAKW(val) {
      var AKW = this.storyLine[val].AKW;
      var AKWPeople = this.RandomMinMaxNumber(AKW[0], AKW[1]);
      this.$store.dispatch('handleChangeAkwValue', AKWPeople);
    },
    RandomMinMaxNumber: function RandomMinMaxNumber(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // Check Player Name
    Player_Name_Check: function Player_Name_Check() {
      var errorCounter = [];
      var reg = "([A-Za-z0-9])\\w+";

      if (this.PlayerName !== null) {
        errorCounter.push("null");
      }

      if (!this.PlayerName.match(reg)) {
        errorCounter.push("regex");
      }

      if (this.PlayerName.length > 15) {
        errorCounter.push("lenght");
      }

      return errorCounter;
    },
    Submit_Player: function Submit_Player() {
      var _this3 = this;

      var errors = this.Player_Name_Check;
      var sec = this.$store.getters.getTimer;
      var dead = this.$store.getters.getDead + this.$store.getters.getAkwDead;
      var rang = Math.round(sec / dead * 100000000);
      var data = {
        "name": this.PlayerName,
        "infected": this.$store.getters.getInfected,
        "deceased": dead,
        "time": this.$store.getters.getElapsedTime,
        "rang": rang
      };

      if (errors.length === 0) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("api/score/create", data).then(function (response) {
          // console.log(response);
          if (response.status === 200) {
            _this3.$router.push({
              name: "leaderboard"
            });
          }
        })["catch"](function (error) {
          console.error(error);
          _this3.PlayerNameError = true;
        });
      } else {
        this.PlayerNameError = true;
      }
    },
    Cheat: function Cheat() {
      // Cheat only for Testing
      this.videoEnd = true;
    }
  },
  destroyed: function destroyed() {
    // Reset the Game
    this.$store.dispatch('handleChangeInfectedValue', 0);
    this.$store.dispatch('handleChangeDeadValue', 0);
    this.$store.dispatch('handleChangeAkwValue', 0);
    this.$store.dispatch('handleChangeTimer', 0);
    this.$store.dispatch("handleChangeElapsedTime", "00:00:00");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _vm.AkwDead !== 0
      ? _c("div", { staticClass: "akw-box" }, [
          _c("img", {
            staticClass: "akw-symbole",
            attrs: { src: "images/akw.png", alt: "AKW" }
          }),
          _vm._v(" "),
          _c("span", [
            _vm._v(" AKW-Tote: " + _vm._s(_vm.numberWithDot(_vm.CounterNumber)))
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "fuel" }, [
      _c("img", {
        staticClass: "fuel-scala",
        attrs: { src: "images/score/gauge_filter.png", alt: "Gauge" }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "fuel-needle",
        style: _vm.style,
        attrs: { src: "images/score/zeiger.svg", alt: "Pointer" }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fuel-counter" }, [
      _c("span", { staticClass: "sil-text" }, [_vm._v(_vm._s(_vm.name))]),
      _vm._v(" "),
      _c("span", { staticClass: "number" }, [
        _vm._v(" " + _vm._s(_vm.numberWithDot(_vm.CounterNumber)) + " ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=template&id=647bd040&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=template&id=647bd040& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "score-board" }, [
    _c(
      "div",
      { staticClass: "infected" },
      [_c("v-gauge", { attrs: { name: "Infizierte:", number: _vm.Infected } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "statistics" }, [_c("v-akw")], 1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "dead" },
      [_c("v-gauge", { attrs: { name: "Tote:", number: _vm.Dead } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "site-header" }, [
    _c(
      "div",
      { staticClass: "site-logo" },
      [
        _c(
          "router-link",
          { staticClass: "site-logo-link", attrs: { to: { name: "home" } } },
          [
            _c("img", {
              staticClass: "site-logo-img",
              attrs: { src: "/images/logo.png", alt: "Life and Death" }
            }),
            _vm._v(" "),
            _c("h1", [_vm._v("Life and Death with Corona")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "site-navigation" }, [
      _c("ul", { staticClass: "navigation-list" }, [
        _c(
          "li",
          { staticClass: "navigation-list-item" },
          [
            _c("router-link", { attrs: { to: { name: "home" } } }, [
              _vm._v("Home")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "navigation-list-item" },
          [
            _c("router-link", { attrs: { to: { name: "leaderboard" } } }, [
              _vm._v("Leaderboard")
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=template&id=14237854&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Game/index.vue?vue&type=template&id=14237854& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-video" }, [
    _c(
      "video",
      {
        ref: "videoRef",
        class: { videoEnd: _vm.videoEnd },
        attrs: { id: "Story-Line_Video", autoplay: "" },
        on: {
          ended: function($event) {
            return _vm.OnEnd()
          },
          pause: _vm.OnPause,
          play: _vm.OnStart,
          timeupdate: _vm.updateVideoTime
        }
      },
      [
        _c("source", {
          attrs: { src: _vm.VideoSource + "webm", type: "video/webm" }
        }),
        _vm._v(" "),
        _c("source", {
          attrs: { src: _vm.VideoSource + "mp4", type: "video/mp4" }
        })
      ]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.ProgressStatus,
          expression: "ProgressStatus"
        }
      ],
      attrs: { type: "hidden" },
      domProps: { value: _vm.ProgressStatus },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.ProgressStatus = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        class: {
          "video-container-grid-end": _vm.videoEnd,
          "video-container-grid": !_vm.videoEnd
        }
      },
      [
        _c("div", { staticClass: "top" }, [
          _c(
            "div",
            { staticClass: "left" },
            [
              _vm.videoEnd
                ? _c(
                    "router-link",
                    {
                      staticClass: "exit-button",
                      attrs: { to: { name: "home" } }
                    },
                    [
                      _c("i", { staticClass: "icon-exit" }),
                      _vm._v(
                        "\n                        Exit\n                    "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _c("audio", {
              ref: "audioRef",
              attrs: { src: "/audio/question_sound.mp3" }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.videoEnd
          ? _c("div", { staticClass: "middle" }, [
              _vm.storyLine[_vm.ProgressStatus].type === "question"
                ? _c("div", { staticClass: "story-line_question" }, [
                    _c("div", [
                      _c("p", { staticClass: "question" }, [
                        _vm._v(
                          _vm._s(this.storyLine[this.ProgressStatus].question)
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "options" }, [
                        _c("div", { staticClass: "option_one" }, [
                          _c("div", [
                            this.storyLine[this.ProgressStatus].question !==
                            undefined
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "responseBtn",
                                    on: {
                                      click: function($event) {
                                        return _vm.nextProgress(
                                          _vm.storyLine[_vm.ProgressStatus]
                                            .firstOption.next
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          _vm.storyLine[this.ProgressStatus]
                                            .firstOption.response
                                        ) +
                                        "\n                                        "
                                    ),
                                    _c("span", { staticClass: "line-1" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-2" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-3" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-4" })
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "option_two" }, [
                          _c("div", [
                            this.storyLine[this.ProgressStatus].question !==
                            undefined
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "responseBtn",
                                    on: {
                                      click: function($event) {
                                        return _vm.nextProgress(
                                          _vm.storyLine[_vm.ProgressStatus]
                                            .secondOption.next
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          _vm.storyLine[this.ProgressStatus]
                                            .secondOption.response
                                        ) +
                                        "\n                                        "
                                    ),
                                    _c("span", { staticClass: "line-1" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-2" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-3" }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "line-4" })
                                  ]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.storyLine[_vm.ProgressStatus].type === "continue"
                ? _c("div", { staticClass: "story-line_continue" })
                : _vm._e(),
              _vm._v(" "),
              _vm.storyLine[_vm.ProgressStatus].type === "end"
                ? _c("div", { staticClass: "story-line_end" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.PlayerName,
                          expression: "PlayerName"
                        }
                      ],
                      staticClass: "input_end_name",
                      attrs: {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Dein Name"
                      },
                      domProps: { value: _vm.PlayerName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.PlayerName = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "responseBtn",
                        on: { click: _vm.Submit_Player }
                      },
                      [
                        _vm._v(
                          "\n                        Senden\n                        "
                        ),
                        _c("span", { staticClass: "line-1" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "line-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "line-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "line-4" })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.PlayerNameError
                      ? _c("span", { staticClass: "error-msg" }, [
                          _vm._v(
                            "Der Name darf nur aus Buchstaben und Zahlen bestehen! (A-Z,a-z,0-9) "
                          )
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "bottom" }, [_c("app-score")], 1)
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/game/akw.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/game/akw.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./akw.vue?vue&type=template&id=1eadb98a& */ "./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a&");
/* harmony import */ var _akw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./akw.vue?vue&type=script&lang=js& */ "./resources/js/components/game/akw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _akw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/akw.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/akw.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/game/akw.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_akw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./akw.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/akw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_akw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./akw.vue?vue&type=template&id=1eadb98a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/akw.vue?vue&type=template&id=1eadb98a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_akw_vue_vue_type_template_id_1eadb98a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/game/gauge.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/gauge.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauge.vue?vue&type=template&id=67b751b2& */ "./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&");
/* harmony import */ var _gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge.vue?vue&type=script&lang=js& */ "./resources/js/components/game/gauge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/gauge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/gauge.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/game/gauge.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gauge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gauge.vue?vue&type=template&id=67b751b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/game/score.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/score.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.vue?vue&type=template&id=647bd040& */ "./resources/js/components/game/score.vue?vue&type=template&id=647bd040&");
/* harmony import */ var _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.vue?vue&type=script&lang=js& */ "./resources/js/components/game/score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["render"],
  _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/score.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/score.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/game/score.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/score.vue?vue&type=template&id=647bd040&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/game/score.vue?vue&type=template&id=647bd040& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=template&id=647bd040& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=template&id=647bd040&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layout/header/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=05b05dcc& */ "./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/header/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=05b05dcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utility/mixins.js":
/*!****************************************!*\
  !*** ./resources/js/utility/mixins.js ***!
  \****************************************/
/*! exports provided: scoreMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreMixins", function() { return scoreMixins; });
// Score component Mixins
var scoreMixins = {
  methods: {
    numberWithDot: function numberWithDot(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Time Formatter
    formattedElapsedTime: function formattedElapsedTime() {
      var date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    randomIntFromInterval: function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};

/***/ }),

/***/ "./resources/js/views/Game/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Game/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=14237854& */ "./resources/js/views/Game/index.vue?vue&type=template&id=14237854&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Game/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Game/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Game/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Game/index.vue?vue&type=template&id=14237854&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Game/index.vue?vue&type=template&id=14237854& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=14237854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=template&id=14237854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);