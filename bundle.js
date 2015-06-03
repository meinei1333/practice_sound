/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*intro-sound = new Howl {
	  src: [\sound/intro_animation_transition.mp3],
	}

	gb-sound = new Howl {
	  src: [\sound/bg.mp3],
	  loop: true
	}

	intro-sound.play!

	do
	  <-! set-timeout _, 5000ms
	  gb-sound.play!

	btn = new button!*/
	var bg, intro, assetsPath, sounds;
	bg = 'bg';
	intro = 'intro';
	assetsPath = 'sound/';
	sounds = [
	  {
	    src: 'bg.mp3',
	    id: bg
	  }, {
	    src: 'intro_animation_transition.mp3',
	    id: intro
	  }
	];
	createjs.Sound.alternateExtensions = ['mp3'];
	createjs.Sound.addEventListener('fileload', playSound);
	createjs.Sound.registerSounds(sounds, assetsPath);
	function playSound(event){
	  var instance;
	  instance = createjs.Sound.play(intro);
	  instance.on('complete', handleComplete, this);
	}
	function handleComplete(target){
	  setTimeout(function(){
	    createjs.Sound.play(bg, {
	      loop: -1
	    });
	  }, 1000);
	}
	//# sourceMappingURL=/Users/Taphy/Documents/workspace/practice_sound/node_modules/livescript-loader/index.js!/Users/Taphy/Documents/workspace/practice_sound/ls/index.ls.map


/***/ }
/******/ ]);