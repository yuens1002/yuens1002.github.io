'use strict';

/**
 * @ngdoc directive
 * @name yuens1002githubioApp.directive:helloWorld
 * @description
 * # helloWorld
 */
angular.module('yuens1002githubioApp')
  .directive('helloWorld', function () {
    return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
});
