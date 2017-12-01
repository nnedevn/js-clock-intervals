"use strict";
window.onload = function() {

  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');

  // Instanciated a new date object
  // returns an object containing current hour, minutes and seconds
  function getCurrentTime() {
    var currentTime = new Date();

    var values = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    }
    return values;
  }

  function convertTo12H(hours) {
    if (hours > 12) {
      return hours - 12;
    }
    return hours;
  }

  setInterval(() => {
    var secDegree = getCurrentTime().seconds * 6;
    var minDegree = getCurrentTime().minutes * 6+getCurrentTime().seconds *.1;
    var hourDegree = convertTo12H(getCurrentTime().hours) * 30 + getCurrentTime().minutes * .5;

    second.style.transform = 'rotate(' + secDegree + 'deg)';
    minute.style.transform = 'rotate(' + minDegree + 'deg)';
    hour.style.transform = 'rotate(' + hourDegree + 'deg)';
  }, 1000)

}
