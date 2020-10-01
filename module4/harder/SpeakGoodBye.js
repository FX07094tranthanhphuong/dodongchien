/*
  Coursera: HTML/CSS/JS
  Copyright: 2020
  Name:
  University:
  ----------- javascripts ------------------
*/

(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);