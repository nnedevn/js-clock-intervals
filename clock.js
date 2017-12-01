"use strict";
window.onload = function() {
  //initialize variables
  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');
  /**
   * getCurrentTime() returns an object
   * which containd the current hour, minutes and seconds
   */
  function getCurrentTime() {
    var currentTime = new Date();
    var values = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    }
    return values;
  }
  /**
   * convertTo12H() checks if the time is in 12 or 24h
   * format and returns the hours in 12h format
   */
  function convertTo12H(hours) {
    if (hours > 12) {
      return hours - 12;
    }
    return hours;
  }
  /**
   * init() initiates the clock rotation.
   * Gets the current hours, minutes and seconds, and calculates the
   * angle of rotation for the element and applies it every second.
   */
  function init() {
    setInterval(() => {
      var secDegree = getCurrentTime().seconds * 6;
      var minDegree = getCurrentTime().minutes * 6 + getCurrentTime().seconds * .1;
      var hourDegree = convertTo12H(getCurrentTime().hours) * 30 + getCurrentTime().minutes * .5;
      second.style.transform = 'rotate(' + secDegree + 'deg)';
      minute.style.transform = 'rotate(' + minDegree + 'deg)';
      hour.style.transform = 'rotate(' + hourDegree + 'deg)';
    }, 1000);
  }
  init();
}
