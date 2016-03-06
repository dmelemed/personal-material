var app = angular.module('StarterApp');

app.controller('ReadingCtrl', function($scope, $mdDialog) {

  $scope.books = [{
    title: "Animal Farm",
    author: "George Orwell",
    id: 1,
    pages: 212,
    /*data: [7, 20, 85, 92, 92, 94, 94, 112, 182, 182, 212, 212],
    log: [7, 13, 65, 7, 0, 2, 0, 18, 70, 0, 30, 0],*/
    data: [
      [Date.UTC(1970, 9, 21), 7],
      [Date.UTC(1970, 9, 28), 20],
      [Date.UTC(1970, 10, 2), 85],
      [Date.UTC(1970, 10, 18), 92],
      [Date.UTC(1970, 10, 19), 92],
      [Date.UTC(1970, 10, 21), 94],
      [Date.UTC(1970, 10, 22), 94],
      [Date.UTC(1970, 10, 28), 112],
      [Date.UTC(1970, 10, 29), 182],
      [Date.UTC(1970, 11, 22), 182],
      [Date.UTC(1970, 12, 22), 212],
      [Date.UTC(1971, 1, 2), 212]
    ],
    log: [2, 0, 10, 0, 80, 20, 0, 0, 28, 0, 40, 0],
    img: "img/book_icon.png"
  }, {
    title: "Brave New World",
    author: "Aldous Huxley",
    id: 2,
    pages: 240,
    data: [
      [Date.UTC(1970, 9, 21), 2],
      [Date.UTC(1970, 9, 28), 2],
      [Date.UTC(1970, 10, 2), 12],
      [Date.UTC(1970, 10, 18), 12],
      [Date.UTC(1970, 10, 19), 92],
      [Date.UTC(1970, 10, 21), 112],
      [Date.UTC(1970, 10, 22), 112],
      [Date.UTC(1970, 10, 28), 112],
      [Date.UTC(1970, 10, 29), 140],
      [Date.UTC(1970, 11, 22), 140],
      [Date.UTC(1970, 12, 22), 180],
      [Date.UTC(1971, 1, 2), 180]
    ],
    log: [2, 0, 10, 0, 80, 20, 0, 0, 28, 0, 40, 0],
    img: "img/book_icon.png"
  }];

  $scope.selectedBook = $scope.books[0];

  $scope.chartConfig = {
    title: {
      text: 'Reading History',
      x: -20 //center
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      gridLineWidth: 0,
      min: 0,
      title: {
        text: 'Pages'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ' pg'
    },
    legend: {
      enabled: false
    }
  };

  $scope.average = function(set) {
    var sum = 0;
    for(var i = 0; i < set.length; i++) {
      sum += set[i];
    }
    return sum / set.length;
  };
});
