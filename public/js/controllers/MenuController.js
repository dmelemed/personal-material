var app = angular.module('StarterApp');

app.controller('MenuCtrl', ['$scope', function($scope) {


  $scope.scrollToDiv = function(id) {
    $("#" + id)[0].scrollIntoView();
  };

  $scope.tabs = [{
    name: "Reading",
    scrollToDivId: "scrollToReading"
  }, {
    name: "Exercise",
    scrollToDivId: "scrollToExercise"
  }, {
    name: "Cooking",
    scrollToDivId: "scrollToCooking"
  }];

}]);
