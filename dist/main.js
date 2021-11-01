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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n // import BoardView from \"./board_view.js\"\n//webpack --watch --mode=development\n// make sure this works and then try to condense code after\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\nvar canvas = document.getElementById(\"canvas1\");\nvar ctx = canvas.getContext('2d'); //  const newBoard = new BoardView(canvas, ctx)\n\nvar newPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nctx.fillStyle = 'white';\nctx.fillRect(370, 44, 700, 701);\nnewPlayer.draw(ctx);\nwindow.addEventListener('resize', function () {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  ctx.fillStyle = 'white';\n  ctx.fillRect(370, 44, 700, 701);\n  newPlayer.draw(ctx);\n});\ndocument.addEventListener('keydown', function (e) {\n  var dir = newPlayer.moves[e.key];\n  newPlayer.pos[0] += dir[0];\n  newPlayer.pos[1] += dir[1];\n}); // document.addEventListener('keyup', (e) => {\n//   let dir = moves[e.code]\n//   newPlayer.pos[0] += 0\n//   newPlayer.pos[1] += 0\n// })\n\nfunction clearOld() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = 'white';\n  ctx.fillRect((canvas.width - 700) / 2, (canvas.height - 701) / 2, 700, 701);\n  newPlayer.draw(ctx, 'red');\n  requestAnimationFrame(clearOld);\n}\n\nclearOld(); // })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Q0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0UsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixFQUNBOztBQUVBLElBQU1DLFNBQVMsR0FBRyxJQUFJTixrREFBSixFQUFsQjtBQUVBQyxNQUFNLENBQUNNLEtBQVAsR0FBZUMsTUFBTSxDQUFDQyxVQUF0QjtBQUNBUixNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkI7QUFFQVAsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FSLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0I7QUFDQVAsU0FBUyxDQUFDUSxJQUFWLENBQWVWLEdBQWY7QUFJQUksTUFBTSxDQUFDTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDZCxFQUFBQSxNQUFNLENBQUNNLEtBQVAsR0FBZUMsTUFBTSxDQUFDQyxVQUF0QjtBQUNBUixFQUFBQSxNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkI7QUFDQVAsRUFBQUEsR0FBRyxDQUFDUSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FSLEVBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0I7QUFDQVAsRUFBQUEsU0FBUyxDQUFDUSxJQUFWLENBQWVWLEdBQWY7QUFDRCxDQU5EO0FBV0ZGLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDLE1BQUlDLEdBQUcsR0FBR1gsU0FBUyxDQUFDWSxLQUFWLENBQWdCRixDQUFDLENBQUNHLEdBQWxCLENBQVY7QUFDQWIsRUFBQUEsU0FBUyxDQUFDYyxHQUFWLENBQWMsQ0FBZCxLQUFvQkgsR0FBRyxDQUFDLENBQUQsQ0FBdkI7QUFDQVgsRUFBQUEsU0FBUyxDQUFDYyxHQUFWLENBQWMsQ0FBZCxLQUFvQkgsR0FBRyxDQUFDLENBQUQsQ0FBdkI7QUFDRCxDQUpELEdBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxRQUFULEdBQXFCO0FBQ25CakIsRUFBQUEsR0FBRyxDQUFDa0IsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JyQixNQUFNLENBQUNNLEtBQTNCLEVBQWtDTixNQUFNLENBQUNTLE1BQXpDO0FBQ0FOLEVBQUFBLEdBQUcsQ0FBQ1EsU0FBSixHQUFnQixPQUFoQjtBQUNBUixFQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYSxDQUFDWixNQUFNLENBQUNNLEtBQVAsR0FBZSxHQUFoQixJQUFxQixDQUFsQyxFQUFxQyxDQUFDTixNQUFNLENBQUNTLE1BQVAsR0FBZ0IsR0FBakIsSUFBd0IsQ0FBN0QsRUFBZ0UsR0FBaEUsRUFBcUUsR0FBckU7QUFDQUosRUFBQUEsU0FBUyxDQUFDUSxJQUFWLENBQWVWLEdBQWYsRUFBb0IsS0FBcEI7QUFDQW1CLEVBQUFBLHFCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0Q7O0FBQ0RBLFFBQVEsSUFJUiIsInNvdXJjZXMiOlsid2VicGFjazovL0Nyb3Nzcm9hZHMtUHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCJcbi8vIGltcG9ydCBCb2FyZFZpZXcgZnJvbSBcIi4vYm9hcmRfdmlldy5qc1wiXG4vL3dlYnBhY2sgLS13YXRjaCAtLW1vZGU9ZGV2ZWxvcG1lbnRcbi8vIG1ha2Ugc3VyZSB0aGlzIHdvcmtzIGFuZCB0aGVuIHRyeSB0byBjb25kZW5zZSBjb2RlIGFmdGVyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIFxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyAgY29uc3QgbmV3Qm9hcmQgPSBuZXcgQm9hcmRWaWV3KGNhbnZhcywgY3R4KVxuICBcbiAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcigpXG4gIFxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgY3R4LmZpbGxSZWN0KDM3MCwgNDQsIDcwMCwgNzAxKVxuICBuZXdQbGF5ZXIuZHJhdyhjdHgpXG5cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGN0eC5maWxsUmVjdCgzNzAsIDQ0LCA3MDAsIDcwMSlcbiAgICBuZXdQbGF5ZXIuZHJhdyhjdHgpXG4gIH0pXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBsZXQgZGlyID0gbmV3UGxheWVyLm1vdmVzW2Uua2V5XVxuICBuZXdQbGF5ZXIucG9zWzBdICs9IGRpclswXVxuICBuZXdQbGF5ZXIucG9zWzFdICs9IGRpclsxXVxufSlcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuLy8gICBsZXQgZGlyID0gbW92ZXNbZS5jb2RlXVxuLy8gICBuZXdQbGF5ZXIucG9zWzBdICs9IDBcbi8vICAgbmV3UGxheWVyLnBvc1sxXSArPSAwXG4vLyB9KVxuXG5mdW5jdGlvbiBjbGVhck9sZCAoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJ1xuICBjdHguZmlsbFJlY3QoKGNhbnZhcy53aWR0aCAtIDcwMCkvMiwgKGNhbnZhcy5oZWlnaHQgLSA3MDEpIC8gMiwgNzAwLCA3MDEpXG4gIG5ld1BsYXllci5kcmF3KGN0eCwgJ3JlZCcpXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjbGVhck9sZClcbn1cbmNsZWFyT2xkKClcblxuXG5cbi8vIH0pXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlBsYXllciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwibmV3UGxheWVyIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRpciIsIm1vdmVzIiwia2V5IiwicG9zIiwiY2xlYXJPbGQiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DEFAULTS = {\n  color: \"red\",\n  width: 50,\n  height: 50,\n  pos: [700, 700],\n  vel: [0, 0]\n};\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.color = DEFAULTS.color;\n    this.width = DEFAULTS.width;\n    this.height = DEFAULTS.height;\n    this.pos = DEFAULTS.pos;\n    this.vel = DEFAULTS.vel;\n    this.moves = {\n      w: [0, -80],\n      a: [-80, 0],\n      s: [0, 80],\n      d: [80, 0]\n    };\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsRUFBQUEsS0FBSyxFQUFFLEtBRE07QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsTUFBTSxFQUFFLEVBSEs7QUFJYkMsRUFBQUEsR0FBRyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FKUTtBQUtiQyxFQUFBQSxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUxRLENBQWpCOztJQU9xQkM7QUFFbkIsb0JBQWM7QUFBQTs7QUFDWixTQUFLTCxLQUFMLEdBQWFELFFBQVEsQ0FBQ0MsS0FBdEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0UsS0FBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNILFFBQVEsQ0FBQ0csTUFBdkI7QUFDQSxTQUFLQyxHQUFMLEdBQVdKLFFBQVEsQ0FBQ0ksR0FBcEI7QUFDQSxTQUFLQyxHQUFMLEdBQVdMLFFBQVEsQ0FBQ0ssR0FBcEI7QUFDQyxTQUFLRSxLQUFMLEdBQWE7QUFDVkMsTUFBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsRUFBTCxDQURPO0FBRVZDLE1BQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQU4sQ0FGTztBQUdWQyxNQUFBQSxDQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUhPO0FBSVZDLE1BQUFBLENBQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxDQUFMO0FBSk8sS0FBYjtBQU9GOzs7O1dBRUQsY0FBS0MsR0FBTCxFQUFVO0FBQ1JBLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLWixLQUFyQjtBQUNBVyxNQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFLVixHQUFMLENBQVMsQ0FBVCxDQUFiLEVBQXlCLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQXpCLEVBQXNDLEtBQUtGLEtBQTNDLEVBQWtELEtBQUtDLE1BQXZEO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Dcm9zc3JvYWRzLVByb2plY3QvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IERFRkFVTFRTID0ge1xuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHBvczogWzcwMCwgNzAwXSxcbiAgICB2ZWw6IFswLCAwXVxuICB9XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xvciA9IERFRkFVTFRTLmNvbG9yO1xuICAgIHRoaXMud2lkdGggPSBERUZBVUxUUy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IERFRkFVTFRTLmhlaWdodDtcbiAgICB0aGlzLnBvcyA9IERFRkFVTFRTLnBvcztcbiAgICB0aGlzLnZlbCA9IERFRkFVTFRTLnZlbFxuICAgICB0aGlzLm1vdmVzID0ge1xuICAgICAgICB3OiBbMCwgLTgwXSxcbiAgICAgICAgYTogWy04MCwgMF0sXG4gICAgICAgIHM6IFswLCA4MF0sXG4gICAgICAgIGQ6IFs4MCwgMF0sXG5cbiAgICAgIH07XG4gIH1cbiAgXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sdGhpcy5wb3NbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxuICAgIFxuICBcblxuICB9XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJwb3MiLCJ2ZWwiLCJQbGF5ZXIiLCJtb3ZlcyIsInciLCJhIiwicyIsImQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

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