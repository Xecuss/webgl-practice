/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shader/fragmentShader.glsl":
/*!****************************************!*\
  !*** ./src/shader/fragmentShader.glsl ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"precision mediump float;\\r\\nvarying vec4 v_Color;\\r\\nvoid main(){\\r\\n    gl_FragColor = v_Color;\\r\\n}\"\n\n//# sourceURL=webpack://gltest/./src/shader/fragmentShader.glsl?");

/***/ }),

/***/ "./src/shader/vertexShader.glsl":
/*!**************************************!*\
  !*** ./src/shader/vertexShader.glsl ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"attribute vec4 a_Position;\\r\\nattribute vec4 a_Color;\\r\\nvarying vec4 v_Color;\\r\\nvoid main(){\\r\\n    gl_Position = a_Position;\\r\\n    // gl_PointSize = 10.0;\\r\\n    v_Color = a_Color;\\r\\n}\"\n\n//# sourceURL=webpack://gltest/./src/shader/vertexShader.glsl?");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loadImage = exports.initVertexBuffer = exports.cvsPos2WebGLPos = void 0;\r\nfunction cvsPos2WebGLPos(cvs, x, y) {\r\n    let cvsBound = cvs.getBoundingClientRect();\r\n    let l = cvsBound.left, t = cvsBound.top, h = cvsBound.height, w = cvsBound.width;\r\n    let mouseL = x - l, mouseT = y - t;\r\n    return {\r\n        x: (mouseL * 2 - w) / w,\r\n        y: (h - mouseT * 2) / h\r\n    };\r\n}\r\nexports.cvsPos2WebGLPos = cvsPos2WebGLPos;\r\nfunction initVertexBuffer(gl) {\r\n    let points = new Float32Array([\r\n        0.5, 0.5, 1.0, 1.0, 0.0,\r\n        -0.5, 0.5, 0.0, 1.0, 1.0,\r\n        0.5, -0.5, 1.0, 1.0, 1.0,\r\n        -0.5, -0.5, 1.0, 0.0, 1.0\r\n    ]);\r\n    const n = 4;\r\n    const FSIZE = points.BYTES_PER_ELEMENT;\r\n    let VertexBuffer = gl.createBuffer();\r\n    if (!VertexBuffer) {\r\n        throw new Error('fail to create buffer!');\r\n    }\r\n    gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer);\r\n    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);\r\n    let a_Position = gl.getAttribLocation(gl.program, 'a_Position');\r\n    let a_Color = gl.getAttribLocation(gl.program, 'a_Color');\r\n    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0);\r\n    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);\r\n    gl.enableVertexAttribArray(a_Position);\r\n    gl.enableVertexAttribArray(a_Color);\r\n    return n;\r\n}\r\nexports.initVertexBuffer = initVertexBuffer;\r\nfunction loadImage(url) {\r\n    let img = new Image();\r\n    img.src = url;\r\n    return new Promise((res, rej) => {\r\n        img.onload = () => {\r\n            res(img);\r\n        };\r\n        img.onerror = rej;\r\n    });\r\n}\r\nexports.loadImage = loadImage;\r\n\n\n//# sourceURL=webpack://gltest/./src/lib/utils.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst vertexShader_glsl_1 = __importDefault(__webpack_require__(/*! ./shader/vertexShader.glsl */ \"./src/shader/vertexShader.glsl\"));\r\nconst fragmentShader_glsl_1 = __importDefault(__webpack_require__(/*! ./shader/fragmentShader.glsl */ \"./src/shader/fragmentShader.glsl\"));\r\nconst utils_1 = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\r\nfunction main() {\r\n    const cvs = document.querySelector('#webgl');\r\n    if (!cvs)\r\n        throw new Error('canvas not found!');\r\n    const gl = getWebGLContext(cvs);\r\n    if (!gl)\r\n        throw new Error('cannot get webgl context!');\r\n    initShaders(gl, vertexShader_glsl_1.default, fragmentShader_glsl_1.default);\r\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\r\n    gl.clear(gl.COLOR_BUFFER_BIT);\r\n    gl.clear(gl.COLOR_BUFFER_BIT);\r\n    let n = utils_1.initVertexBuffer(gl);\r\n    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);\r\n}\r\nwindow.onload = main;\r\n\n\n//# sourceURL=webpack://gltest/./src/main.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;