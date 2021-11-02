/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n // import BoardView from \"./board_view.js\"\n//webpack --watch --mode=development\n// make sure this works and then try to condense code after\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas1 = document.getElementById(\"canvas1\");\n  var ctx = canvas1.getContext('2d'); //  const newBoard = new BoardView(canvas, ctx)\n\n  var canvas2 = document.getElementById(\"canvas2\");\n  var ctx2 = canvas2.getContext('2d');\n  var newPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas2);\n  canvas1.width = window.innerWidth;\n  canvas1.height = window.innerHeight;\n  newPlayer.draw(ctx2); // console.log(canvas2)\n\n  ctx2.fillStyle = 'white';\n  ctx2.fillRect(canvas2.width, canvas2.height, 700, 700);\n  window.addEventListener('resize', function () {\n    canvas1.width = window.innerWidth;\n    canvas1.height = window.innerHeight;\n    ctx2.fillStyle = 'white';\n    ctx2.fillRect(canvas2.width, canvas2.height, 700, 700);\n    newPlayer.draw(ctx2);\n  });\n  document.addEventListener('keydown', function (e) {\n    var dir = newPlayer.moves[e.key];\n    console.log(dir);\n    newPlayer.x += dir[0];\n    newPlayer.y += dir[1];\n  }); // document.addEventListener('keyup', (e) => {\n  //   let dir = moves[e.code]\n  //   newPlayer.pos[0] += 0\n  //   newPlayer.pos[1] += 0\n  // })\n\n  function clearOld() {\n    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);\n    ctx2.fillStyle = 'white';\n    ctx2.fillRect(canvas2.width, canvas2.height, 700, 700);\n    newPlayer.draw(ctx2);\n    requestAnimationFrame(clearOld);\n  }\n\n  clearOld();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllci5qc1wiXG4vLyBpbXBvcnQgQm9hcmRWaWV3IGZyb20gXCIuL2JvYXJkX3ZpZXcuanNcIlxuLy93ZWJwYWNrIC0td2F0Y2ggLS1tb2RlPWRldmVsb3BtZW50XG4vLyBtYWtlIHN1cmUgdGhpcyB3b3JrcyBhbmQgdGhlbiB0cnkgdG8gY29uZGVuc2UgY29kZSBhZnRlclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBcbmNvbnN0IGNhbnZhczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhczEuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gIGNvbnN0IG5ld0JvYXJkID0gbmV3IEJvYXJkVmlldyhjYW52YXMsIGN0eClcbiAgY29uc3QgY2FudmFzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMlwiKTtcbiAgY29uc3QgY3R4MiA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcihjYW52YXMyKVxuICBjYW52YXMxLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgY2FudmFzMS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICBuZXdQbGF5ZXIuZHJhdyhjdHgyKVxuLy8gY29uc29sZS5sb2coY2FudmFzMilcbiAgY3R4Mi5maWxsU3R5bGUgPSAnd2hpdGUnXG4gIFxuICBjdHgyLmZpbGxSZWN0KGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCA3MDAsIDcwMCApXG5cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FudmFzMS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzMS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBjdHgyLmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICBjdHgyLmZpbGxSZWN0KGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCA3MDAsIDcwMClcbiAgICBuZXdQbGF5ZXIuZHJhdyhjdHgyKVxuICB9KVxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgbGV0IGRpciA9IG5ld1BsYXllci5tb3Zlc1tlLmtleV1cbiAgY29uc29sZS5sb2coZGlyKVxuICBuZXdQbGF5ZXIueCArPSBkaXJbMF1cbiAgbmV3UGxheWVyLnkgKz0gZGlyWzFdXG59KVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4vLyAgIGxldCBkaXIgPSBtb3Zlc1tlLmNvZGVdXG4vLyAgIG5ld1BsYXllci5wb3NbMF0gKz0gMFxuLy8gICBuZXdQbGF5ZXIucG9zWzFdICs9IDBcbi8vIH0pXG5cbmZ1bmN0aW9uIGNsZWFyT2xkICgpIHtcbiAgY3R4Mi5jbGVhclJlY3QoMCwgMCwgY2FudmFzMi53aWR0aCwgY2FudmFzMi5oZWlnaHQpXG4gIGN0eDIuZmlsbFN0eWxlID0gJ3doaXRlJ1xuICBjdHgyLmZpbGxSZWN0KGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCA3MDAsIDcwMClcbiAgbmV3UGxheWVyLmRyYXcoY3R4MilcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNsZWFyT2xkKVxufVxuY2xlYXJPbGQoKVxuXG5cblxufSlcblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzMSIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhczIiLCJjdHgyIiwibmV3UGxheWVyIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJlIiwiZGlyIiwibW92ZXMiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwieCIsInkiLCJjbGVhck9sZCIsImNsZWFyUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DEFAULTS = {\n  color: \"green\",\n  width: 20,\n  height: 20\n};\n\nvar Player = /*#__PURE__*/function () {\n  function Player(canvas2) {\n    _classCallCheck(this, Player);\n\n    this.color = DEFAULTS.color;\n    this.width = DEFAULTS.width;\n    this.height = DEFAULTS.height;\n    this.x = (canvas2.width - this.width) / 2;\n    this.y = canvas2.height - this.height - 20;\n    this.moves = {\n      w: [0, -80],\n      a: [-80, 0],\n      s: [0, 80],\n      d: [80, 0]\n    };\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(ctx2) {\n      ctx2.fillStyle = this.color;\n      ctx2.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsS0FBSyxFQUFFLE9BRE07QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBakI7O0lBS3FCQztBQUVuQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLSixLQUFMLEdBQWFELFFBQVEsQ0FBQ0MsS0FBdEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0UsS0FBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNILFFBQVEsQ0FBQ0csTUFBdkI7QUFDQSxTQUFLRyxDQUFMLEdBQVMsQ0FBQ0QsT0FBTyxDQUFDSCxLQUFSLEdBQWdCLEtBQUtBLEtBQXRCLElBQStCLENBQXhDO0FBQ0EsU0FBS0ssQ0FBTCxHQUFVRixPQUFPLENBQUNGLE1BQVIsR0FBaUIsS0FBS0EsTUFBdkIsR0FBaUMsRUFBMUM7QUFDQyxTQUFLSyxLQUFMLEdBQWE7QUFDVkMsTUFBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsRUFBTCxDQURPO0FBRVZDLE1BQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQU4sQ0FGTztBQUdWQyxNQUFBQSxDQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUhPO0FBSVZDLE1BQUFBLENBQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxDQUFMO0FBSk8sS0FBYjtBQU9GOzs7O1dBRUQsY0FBS0MsSUFBTCxFQUFXO0FBQ1RBLE1BQUFBLElBQUksQ0FBQ0MsU0FBTCxHQUFpQixLQUFLYixLQUF0QjtBQUNBWSxNQUFBQSxJQUFJLENBQUNFLFFBQUwsQ0FBYyxLQUFLVCxDQUFuQixFQUFzQixLQUFLQyxDQUEzQixFQUE4QixLQUFLTCxLQUFuQyxFQUEwQyxLQUFLQyxNQUEvQztBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ3Jvc3Nyb2Fkcy1Qcm9qZWN0Ly4vc3JjL3BsYXllci5qcz9hOGEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICB9XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBcbiAgY29uc3RydWN0b3IoY2FudmFzMikge1xuICAgIHRoaXMuY29sb3IgPSBERUZBVUxUUy5jb2xvcjtcbiAgICB0aGlzLndpZHRoID0gREVGQVVMVFMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBERUZBVUxUUy5oZWlnaHQ7XG4gICAgdGhpcy54ID0gKGNhbnZhczIud2lkdGggLSB0aGlzLndpZHRoKSAvIDJcbiAgICB0aGlzLnkgPSAoY2FudmFzMi5oZWlnaHQgLSB0aGlzLmhlaWdodCkgLSAyMFxuICAgICB0aGlzLm1vdmVzID0ge1xuICAgICAgICB3OiBbMCwgLTgwXSxcbiAgICAgICAgYTogWy04MCwgMF0sXG4gICAgICAgIHM6IFswLCA4MF0sXG4gICAgICAgIGQ6IFs4MCwgMF0sXG5cbiAgICAgIH07XG4gIH1cbiAgXG4gIGRyYXcoY3R4Mikge1xuICAgIGN0eDIuZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgIGN0eDIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIFxuICBcblxuICB9XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJQbGF5ZXIiLCJjYW52YXMyIiwieCIsInkiLCJtb3ZlcyIsInciLCJhIiwicyIsImQiLCJjdHgyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9zc3JvYWRzLVByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;