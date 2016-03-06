var app = angular.module('StarterApp');

app.controller('CalendarCtrl', ['$scope', function($scope) {

  const MINS_PER_DAY = 60 * 24;

  $scope.events = [{
    name: 'Sleep',
    mins: 420,
    y: 56.33
  }, {
    name: 'Shower',
    mins: 15,
    y: 24.03
  }, {
    name: 'Commute',
    mins: 50,
    y: 10.38
  }, {
    name: 'Work',
    mins: 540,
    y: 4.77
  }, {
    name: 'Commute',
    mins: 45,
    y: 0.91
  }, {
    name: 'Cooking Dinner',
    mins: 30,
    y: 0.2
  }];


  $scope.data = [];

  (function getDataFromEvents() {
    var usedPercentage = 0;
    for (var i = 0; i < $scope.events.length; i++) {
      var event = $scope.events[i];
      var pieSlice = {
        name: event.name,
        y: event.mins / MINS_PER_DAY * 100
      };
      usedPercentage += pieSlice.y;
      $scope.data.push(pieSlice);
    }
    var unusedTime = {
      name: "Unused",
      y: 100 - usedPercentage
    };
    $scope.data.push(unusedTime);
  }());

  /*(function setFirstPointSelected() {
    if ($scope.data.length > 0) {
      var first = $scope.data[0];
      first.sliced = true,
      first.selected = true
    }
  }());*/

  $scope.pieChart = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Daily schedule for Friday, March 4, 2016'
    },
    tooltip: {
      formatter: function() {
        return this.point.name;
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          formatter: function() {
            console.log(this);
            var timeString = "";
            var totalMinutes = Math.round(this.y * MINS_PER_DAY / 100);
            var hours = Math.floor(totalMinutes / 60);
            var minutes = totalMinutes % 60;
            if(minutes === 0) {
              minutes = "00";
            }
            return this.point.name + ' <b>' + hours + ':' + minutes + '</b>';
          },
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Events',

      colorByPoint: true,
      data: $scope.data,
      point: {
        events: {
          click: function(event) {
            console.log(this);
          }
        }
      }
    }],
  };
}]);
