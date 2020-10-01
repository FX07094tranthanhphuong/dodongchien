/*
  Coursera: HTML/CSS/JS
  Copyright: 2020
  Name:
  University:
  ----------- javascripts ------------------
*/

for (var i = 0; i < names.length; ++i) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter.toLowerCase() === 'j') {
    byeSpeaker.speak(names[i]);
  } 
  else {
    helloSpeaker.speak(names[i]);
  }
}
