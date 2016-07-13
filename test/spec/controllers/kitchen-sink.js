'use strict';

describe('Controller: KitchenSinkCtrl', function () {

  // load the controller's module
  beforeEach(module('yuens1002githubioApp'));

  var KitchenSinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KitchenSinkCtrl = $controller('KitchenSinkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KitchenSinkCtrl.awesomeThings.length).toBe(3);
  });
});
