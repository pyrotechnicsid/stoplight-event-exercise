(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');
  var stopLight = document.getElementById('stopLight');
  var slowLight = document.getElementById('slowLight');
  var goLight = document.getElementById('goLight');

  var button = document.getElementsByClassName('button')

  stopButton.addEventListener('click', function(){
  if (stopLight.style.backgroundColor === 'red') {
    stopLight.style.backgroundColor = 'black';
  } 
  else {
    stopLight.style.backgroundColor = 'red';
  }
  
})}())
