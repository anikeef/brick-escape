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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\nconst Ball = (function(x, y) {\n\n  function getXofTime(x0, angle) {\n    const v = 1500; // px/second\n    const cosAngle = Math.cos(angle);\n    return function(time) {\n      const t = msToSeconds(time);\n      return x0 + v * cosAngle * t; // px\n    }\n  }\n\n  function getYofTime(x0, angle) {\n    const v = 1500; // px/second\n    const a = -3000; // px/second^2\n    const sinAngle = Math.sin(angle);\n    return function(time) {\n      const t = msToSeconds(time);\n      return x0 + v * sinAngle * t + a * t**2 / 2; // px\n    }\n  }\n\n  function xOfTime(time) {\n    const v = 2000; // px/second\n    const a = 0; // px/second^2\n    const t = msToSeconds(time);\n    return v * t + a * t * t / 2;; // px\n  }\n\n  function yOfTime(time) {\n    const v = 500; // px/second\n    const a = -1000; // px/second^2\n    const t = msToSeconds(time);\n    return v * t + a * t * t / 2;\n  }\n\n  function yVelocity(time) {\n\n  }\n\n  function msToSeconds(ms) {\n    return ms / 1000;\n  }\n\n  return {x, y, getXofTime, getYofTime};\n})();\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\n\n\n\nfunction GameGUI() {\n  const container = document.querySelector(\".content\");\n  const containerWidth = container.offsetWidth;\n  const containerHeight = container.offsetHeight;\n\n  const ball = document.createElement(\"div\");\n  ball.classList.add(\"ball\");\n  ball.style.width = 50 + \"px\";\n  ball.style.height = 50 + \"px\";\n  ball.style.left = 0;\n  ball.style.bottom = 0;\n  container.appendChild(ball);\n\n  container.addEventListener(\"click\", jump);\n\n  function jump(e) {\n    console.log(angle(e));\n    const x = _ball_js__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"].getXofTime(parseInt(ball.style.left), angle(e));\n    const y = _ball_js__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"].getYofTime(parseInt(ball.style.bottom), angle(e));\n    let start = performance.now();\n    requestAnimationFrame(function animate() {\n      let time = performance.now() - start;\n      // If ball is not underground\n      if (parseInt(ball.style.bottom) >= 0) {\n        ball.style.left = x(time) + \"px\";\n        ball.style.bottom = y(time) + \"px\";\n        requestAnimationFrame(animate);\n      } else {\n        ball.style.left = x(time) + \"px\";\n        ball.style.bottom = 0;\n      }\n    })\n  }\n\n  function angle(e) {\n    let x = e.pageX - parseInt(ball.style.left);\n    let y = (containerHeight - e.pageY) - parseInt(ball.style.bottom);\n    return arcctg(x / y);\n  }\n\n  function arcctg(x) {\n    return Math.PI / 2 - Math.atan(x);\n  }\n};\n\nGameGUI();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });