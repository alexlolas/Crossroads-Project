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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Game = function Game(canvas2, ctx) {\n  _classCallCheck(this, Game);\n\n  this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas2);\n  this.obstacleInt = new _obstacle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas2); // this.obstacleInt.obstacles(canvas2)\n  // this.obstacleInt.handleObstacles(ctx)\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCRSxPQUNuQixjQUFZQyxPQUFaLEVBQXFCQyxHQUFyQixFQUEwQjtBQUFBOztBQUN4QixPQUFLQyxNQUFMLEdBQWMsSUFBSUwsa0RBQUosQ0FBV0csT0FBWCxDQUFkO0FBQ0EsT0FBS0csV0FBTCxHQUFtQixJQUFJTCxvREFBSixDQUFhRSxPQUFiLENBQW5CLENBRndCLENBR3hCO0FBQ0E7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL0Nyb3Nzcm9hZHMtUHJvamVjdC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIlxuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL29ic3RhY2xlLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhczIsIGN0eCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMyKVxuICAgIHRoaXMub2JzdGFjbGVJbnQgPSBuZXcgT2JzdGFjbGUoY2FudmFzMilcbiAgICAvLyB0aGlzLm9ic3RhY2xlSW50Lm9ic3RhY2xlcyhjYW52YXMyKVxuICAgIC8vIHRoaXMub2JzdGFjbGVJbnQuaGFuZGxlT2JzdGFjbGVzKGN0eClcbiAgICBcbiAgfVxuXG4gIFxuICB9XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiT2JzdGFjbGUiLCJHYW1lIiwiY2FudmFzMiIsImN0eCIsInBsYXllciIsIm9ic3RhY2xlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// import Player from \"./player.js\"\n // import BoardView from \"./board_view.js\"\n//webpack --watch --mode=development\n// make sure this works and then try to condense code after\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\nvar canvas1 = document.getElementById(\"canvas1\");\nvar ctx = canvas1.getContext('2d'); //  const newBoard = new BoardView(canvas, ctx)\n\nvar canvas2 = document.getElementById(\"canvas2\");\nvar ctx2 = canvas2.getContext('2d');\nvar newGame = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas2, ctx2); // canvas1.width = window.innerWidth;\n// canvas1.height = window.innerHeight;\n// newGame.player.draw(ctx2)\n// newGame.obstacle.draw(ctx2)\n// console.log(canvas2)\n// ctx2.fillStyle = 'white'\n// ctx2.fillRect(canvas2.width, canvas2.height, 700, 700 )\n\nwindow.addEventListener('resize', function () {\n  canvas1.width = window.innerWidth;\n  canvas1.height = window.innerHeight;\n  ctx2.fillStyle = 'white';\n  ctx2.fillRect(canvas2.width, canvas2.height, 700, 700);\n  newGame.player.draw(ctx2);\n});\ndocument.addEventListener('keydown', function (e) {\n  var dir = newGame.player.moves[e.key];\n\n  if (newGame.player.x + dir[0] < canvas2.width && newGame.player.x + dir[0] > 0 && newGame.player.y + dir[1] < canvas2.height && newGame.player.y + dir[1] > 0) {\n    newGame.player.x = newGame.player.x += dir[0];\n    newGame.player.y = newGame.player.y += dir[1];\n  }\n}); // document.addEventListener('keyup', (e) => {\n//   let dir = moves[e.code]\n//   newPlayer.pos[0] += 0\n//   newPlayer.pos[1] += 0\n// })\n\nfunction clearOld() {\n  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);\n  ctx2.fillStyle = 'white'; // ctx2.fillRect(canvas2.width, canvas2.height, 700, 700)\n\n  newGame.player.draw(ctx2);\n  newGame.obstacleInt.obstacles(canvas2);\n  newGame.obstacleInt.handleObstacles(ctx2);\n  requestAnimationFrame(clearOld);\n}\n\nclearOld(); // })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9DdEIsSUFBcEM7QUFDQXVCLEVBQUFBLHFCQUFxQixDQUFDTCxRQUFELENBQXJCO0FBQ0Q7O0FBQ0RBLFFBQVEsSUFLUiIsInNvdXJjZXMiOlsid2VicGFjazovL0Nyb3Nzcm9hZHMtUHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCJcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIlxuXG4vLyBpbXBvcnQgQm9hcmRWaWV3IGZyb20gXCIuL2JvYXJkX3ZpZXcuanNcIlxuLy93ZWJwYWNrIC0td2F0Y2ggLS1tb2RlPWRldmVsb3BtZW50XG4vLyBtYWtlIHN1cmUgdGhpcyB3b3JrcyBhbmQgdGhlbiB0cnkgdG8gY29uZGVuc2UgY29kZSBhZnRlclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBcbmNvbnN0IGNhbnZhczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhczEuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gIGNvbnN0IG5ld0JvYXJkID0gbmV3IEJvYXJkVmlldyhjYW52YXMsIGN0eClcbiAgY29uc3QgY2FudmFzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMlwiKTtcbiAgY29uc3QgY3R4MiA9IGNhbnZhczIuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lKGNhbnZhczIsIGN0eDIpXG4gIC8vIGNhbnZhczEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgLy8gY2FudmFzMS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgLy8gbmV3R2FtZS5wbGF5ZXIuZHJhdyhjdHgyKVxuLy8gbmV3R2FtZS5vYnN0YWNsZS5kcmF3KGN0eDIpXG5cbiAgLy8gY29uc29sZS5sb2coY2FudmFzMilcbiAgLy8gY3R4Mi5maWxsU3R5bGUgPSAnd2hpdGUnXG4gIFxuICAvLyBjdHgyLmZpbGxSZWN0KGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCA3MDAsIDcwMCApXG5cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FudmFzMS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzMS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBjdHgyLmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICBjdHgyLmZpbGxSZWN0KGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0LCA3MDAsIDcwMClcbiAgICBuZXdHYW1lLnBsYXllci5kcmF3KGN0eDIpXG4gIH0pXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBsZXQgZGlyID0gbmV3R2FtZS5wbGF5ZXIubW92ZXNbZS5rZXldXG4gIGlmICgobmV3R2FtZS5wbGF5ZXIueCArIGRpclswXSkgPCBjYW52YXMyLndpZHRoICYmIG5ld0dhbWUucGxheWVyLnggK2RpclswXSA+IDAgJiYgbmV3R2FtZS5wbGF5ZXIueSArIGRpclsxXSA8IGNhbnZhczIuaGVpZ2h0ICYmIG5ld0dhbWUucGxheWVyLnkgKyBkaXJbMV0gPiAwKSB7XG4gICAgbmV3R2FtZS5wbGF5ZXIueCA9IG5ld0dhbWUucGxheWVyLnggKz0gZGlyWzBdXG4gICAgbmV3R2FtZS5wbGF5ZXIueSA9IG5ld0dhbWUucGxheWVyLnkgKz0gZGlyWzFdXG4gIH1cblxufSlcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuLy8gICBsZXQgZGlyID0gbW92ZXNbZS5jb2RlXVxuLy8gICBuZXdQbGF5ZXIucG9zWzBdICs9IDBcbi8vICAgbmV3UGxheWVyLnBvc1sxXSArPSAwXG4vLyB9KVxuXG5mdW5jdGlvbiBjbGVhck9sZCAoKSB7XG4gIGN0eDIuY2xlYXJSZWN0KDAsIDAsIGNhbnZhczIud2lkdGgsIGNhbnZhczIuaGVpZ2h0KVxuICBjdHgyLmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgLy8gY3R4Mi5maWxsUmVjdChjYW52YXMyLndpZHRoLCBjYW52YXMyLmhlaWdodCwgNzAwLCA3MDApXG4gIG5ld0dhbWUucGxheWVyLmRyYXcoY3R4MilcbiAgbmV3R2FtZS5vYnN0YWNsZUludC5vYnN0YWNsZXMoY2FudmFzMilcbiAgbmV3R2FtZS5vYnN0YWNsZUludC5oYW5kbGVPYnN0YWNsZXMoY3R4MilcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNsZWFyT2xkKVxufVxuY2xlYXJPbGQoKVxuXG5cblxuXG4vLyB9KVxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzMiIsImN0eDIiLCJuZXdHYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwbGF5ZXIiLCJkcmF3IiwiZSIsImRpciIsIm1vdmVzIiwia2V5IiwieCIsInkiLCJjbGVhck9sZCIsImNsZWFyUmVjdCIsIm9ic3RhY2xlSW50Iiwib2JzdGFjbGVzIiwiaGFuZGxlT2JzdGFjbGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar OBSTACLES = {\n  height: 50,\n  width: 50,\n  color: 'red',\n  vel: 1,\n  speed: 2\n};\n\nvar Obstacle = /*#__PURE__*/function () {\n  // constructor(canvas2) {\n  //   this.height = OBSTACLES.height;\n  //   this.width = OBSTACLES.width;\n  //   this.color = OBSTACLES.color;\n  //   this.vel = OBSTACLES.vel;\n  //   this.x = canvas2.width \n  //   this.y = canvas2.height - this.height - 90;\n  //   this.speed = OBSTACLES.speed\n  //   this.obstacleArr = []\n  // }\n  function Obstacle(x, y, width, height, speed, canvas2) {\n    _classCallCheck(this, Obstacle);\n\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.speed = speed;\n    this.obstacleArr = [];\n  }\n\n  _createClass(Obstacle, [{\n    key: \"moveObject\",\n    value: function moveObject() {\n      this.x += this.vel * this.speed;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx2) {\n      ctx2.fillStyle = 'red';\n      ctx2.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"obstacles\",\n    value: function obstacles(canvas2) {\n      for (var i = 0; i < 2; i++) {\n        var x = i * 350;\n        this.obstacleArr.push(new Obstacle(x, canvas2.height - 50 * 2 - 20, 50, 50, 1));\n      }\n    }\n  }, {\n    key: \"handleObstacles\",\n    value: function handleObstacles(ctx2) {\n      for (var i = 0; i < this.obstacleArr.length; i++) {\n        this.obstacleArr[i].moveObject();\n        this.obstacleArr[i].draw(ctx2);\n      }\n    }\n  }]);\n\n  return Obstacle;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb2JzdGFjbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsTUFBTSxFQUFFLEVBRFE7QUFFaEJDLEVBQUFBLEtBQUssRUFBRSxFQUZTO0FBR2hCQyxFQUFBQSxLQUFLLEVBQUUsS0FIUztBQUloQkMsRUFBQUEsR0FBRyxFQUFFLENBSlc7QUFLaEJDLEVBQUFBLEtBQUssRUFBRTtBQUxTLENBQWxCOztJQVNxQkM7QUFDbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxvQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCTixLQUFsQixFQUF5QkQsTUFBekIsRUFBaUNJLEtBQWpDLEVBQXdDSSxPQUF4QyxFQUFpRDtBQUFBOztBQUUvQyxTQUFLRixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLSSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7Ozs7V0FFRCxzQkFBYztBQUNaLFdBQUtILENBQUwsSUFBVSxLQUFLSCxHQUFMLEdBQVcsS0FBS0MsS0FBMUI7QUFDRDs7O1dBRUQsY0FBS00sSUFBTCxFQUFXO0FBQ1RBLE1BQUFBLElBQUksQ0FBQ0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLFFBQUwsQ0FBYyxLQUFLTixDQUFuQixFQUFzQixLQUFLQyxDQUEzQixFQUE4QixLQUFLTixLQUFuQyxFQUEwQyxLQUFLRCxNQUEvQztBQUVEOzs7V0FFRCxtQkFBVVEsT0FBVixFQUFrQjtBQUNoQixXQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsWUFBSVAsQ0FBQyxHQUFHTyxDQUFDLEdBQUcsR0FBWjtBQUNBLGFBQUtKLFdBQUwsQ0FBaUJLLElBQWpCLENBQXNCLElBQUlULFFBQUosQ0FBYUMsQ0FBYixFQUFnQkUsT0FBTyxDQUFDUixNQUFSLEdBQWlCLEtBQUssQ0FBdEIsR0FBMEIsRUFBMUMsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsQ0FBdEQsQ0FBdEI7QUFHRDtBQUNGOzs7V0FFRCx5QkFBZ0JVLElBQWhCLEVBQXNCO0FBQ3BCLFdBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLSixXQUFMLENBQWlCTSxNQUFyQyxFQUE2Q0YsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxhQUFLSixXQUFMLENBQWlCSSxDQUFqQixFQUFvQkcsVUFBcEI7QUFDQSxhQUFLUCxXQUFMLENBQWlCSSxDQUFqQixFQUFvQkksSUFBcEIsQ0FBeUJQLElBQXpCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0Nyb3Nzcm9hZHMtUHJvamVjdC8uL3NyYy9vYnN0YWNsZS5qcz85YjBhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9CU1RBQ0xFUyA9IHtcbiAgaGVpZ2h0OiA1MCxcbiAgd2lkdGg6IDUwLFxuICBjb2xvcjogJ3JlZCcsXG4gIHZlbDogMSxcbiAgc3BlZWQ6IDJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XG4gIC8vIGNvbnN0cnVjdG9yKGNhbnZhczIpIHtcbiAgIFxuICAvLyAgIHRoaXMuaGVpZ2h0ID0gT0JTVEFDTEVTLmhlaWdodDtcbiAgLy8gICB0aGlzLndpZHRoID0gT0JTVEFDTEVTLndpZHRoO1xuICAvLyAgIHRoaXMuY29sb3IgPSBPQlNUQUNMRVMuY29sb3I7XG4gIC8vICAgdGhpcy52ZWwgPSBPQlNUQUNMRVMudmVsO1xuICAvLyAgIHRoaXMueCA9IGNhbnZhczIud2lkdGggXG4gIC8vICAgdGhpcy55ID0gY2FudmFzMi5oZWlnaHQgLSB0aGlzLmhlaWdodCAtIDkwO1xuICAvLyAgIHRoaXMuc3BlZWQgPSBPQlNUQUNMRVMuc3BlZWRcbiAgLy8gICB0aGlzLm9ic3RhY2xlQXJyID0gW11cbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNwZWVkLCBjYW52YXMyKSB7XG5cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZFxuICAgIHRoaXMub2JzdGFjbGVBcnIgPSBbXVxuICB9XG5cbiAgbW92ZU9iamVjdCAoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsICogdGhpcy5zcGVlZFxuICB9XG5cbiAgZHJhdyhjdHgyKSB7XG4gICAgY3R4Mi5maWxsU3R5bGUgPSAncmVkJ1xuICAgIGN0eDIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIFxuICB9XG5cbiAgb2JzdGFjbGVzKGNhbnZhczIpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgeCA9IGkgKiAzNTBcbiAgICAgIHRoaXMub2JzdGFjbGVBcnIucHVzaChuZXcgT2JzdGFjbGUoeCwgY2FudmFzMi5oZWlnaHQgLSA1MCAqIDIgLSAyMCwgNTAsIDUwLCAxKSkgXG5cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9ic3RhY2xlcyhjdHgyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9ic3RhY2xlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm9ic3RhY2xlQXJyW2ldLm1vdmVPYmplY3QoKVxuICAgICAgdGhpcy5vYnN0YWNsZUFycltpXS5kcmF3KGN0eDIpXG4gICAgfVxuICB9XG4gIFxuXG5cbn0iXSwibmFtZXMiOlsiT0JTVEFDTEVTIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInZlbCIsInNwZWVkIiwiT2JzdGFjbGUiLCJ4IiwieSIsImNhbnZhczIiLCJvYnN0YWNsZUFyciIsImN0eDIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImkiLCJwdXNoIiwibGVuZ3RoIiwibW92ZU9iamVjdCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/obstacle.js\n");

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