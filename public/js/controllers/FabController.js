var app = angular.module('StarterApp');

app.controller('FabCtrl', ['$scope', function($scope) {
  var self = this;
  self.isOpen = false;
  self.actions = [{
    name: "Reading",
    icon: "book",
    direction: "bottom",
    onClick: $scope.empty
  }, {
    name: "Exercise",
    icon: "fitness_center",
    direction: "top",
    onClick: $scope.empty
  }, {
    name: "Recipes",
    icon: "restaurant_menu",
    direction: "bottom",
    onClick: $scope.empty
  }];

  $scope.empty = function() {
    console.log("clicked");
  }
  /*$scope.$watch('demo.isOpen', function(isOpen) {
    if (isOpen) {
      $timeout(function() {
        $scope.tooltipVisible = self.isOpen;
      }, 600);
    } else {
      $scope.tooltipVisible = self.isOpen;
    }
  });*/
}]);
