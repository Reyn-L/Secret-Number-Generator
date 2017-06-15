/*jshint esversion: 6 */
'use strict';
module.exports = function() {
    let secretNumber = (Math.random()*1000000 + 1);
      return function() {
        return secretNumber;
      };

};
