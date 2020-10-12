/*
  Coursera: HTML/CSS/JS
  Copyright: 2020
  Name:
  University:
  ----------- javascripts ------------------
*/

(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);