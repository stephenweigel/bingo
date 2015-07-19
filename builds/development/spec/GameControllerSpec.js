describe('GameController', function() {
    beforeEach(module('myApp'));

    var $controller, $scope, controller;

  beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(function(){
    $scope = {};  
    controller = $controller('GameController', { $scope: $scope });

    $scope.test = true;
  });

  //calculateGsxPrice
  it('test should pass', function() {
    expect($scope.test).toEqual(true);
  });
});