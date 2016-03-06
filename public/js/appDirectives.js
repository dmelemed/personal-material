var app = angular.module('StarterApp');

app.directive('hcChart', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      options: '='
    },
    link: function(scope, element) {
      Highcharts.chart(element[0], scope.options);
    }
  };
});

app.directive('highchart',
  function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        config: '=',
        book: '='
      },
      template: '<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto">Not working</div>',
      link: function(scope, element, attrs) {
        console.log("highchart");
        var config = scope.config;
        var book = scope.book;
        config.series = [{
          name: book.title,
          data: book.data
        }];
        config.yAxis.max = book.pages;
        config.yAxis.plotLines.push({
          color: 'red',
          value: book.pages,
          width: 2
        });
        element.highcharts(config);
        scope.$watch("book", function(book) {
          var config = scope.config;
          config.series = [{
            name: book.title,
            data: book.data
          }];
          config.yAxis.max = book.pages;
          config.yAxis.plotLines = [{
            value: 0,
            width: 1,
            color: '#808080'
          }, {
            color: 'red',
            value: book.pages,
            width: 2
          }];
          console.log(config);
          element.highcharts(config);
        });
      }
    }
  });

app.directive('piechart',
function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      config: '=',
    },
    template: '<div id="pieChart" style="min-width: 310px; height: 400px; margin: 0 auto">Not working</div>',
    link: function(scope, element, attrs) {
      console.log("pieChart");
      element.highcharts(scope.config);
    }
  };
});
