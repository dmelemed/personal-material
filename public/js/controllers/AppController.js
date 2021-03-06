var app = angular.module('StarterApp');

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [{
    link: '',
    title: 'Dashboard',
    icon: 'dashboard'
  }, {
    link: '',
    title: 'Reading',
    icon: 'book'
  }, {
    link: '',
    title: 'Action Items',
    icon: 'message'
  }];
  $scope.admin = [{
    link: '',
    title: 'Trash',
    icon: 'delete'
  }, {
    link: 'showListBottomSheet($event)',
    title: 'Settings',
    icon: 'settings'
  }];
  $scope.reading = [{
    what: 'Lord of the Flies',
    who: 'William Golding',
    when: 'Page 125 of 189',
    notes: "66.1% Completion"
  }, {
    what: 'The Catcher in the Rye',
    who: 'J.D. Salinger',
    when: 'Page 118 of 155',
    notes: "76.1% Completion"
  }, {
    what: 'Lord of the Flies',
    who: 'William Golding',
    when: 'Page 125 of 189',
    notes: "66.1% Completion"
  }, {
    what: 'The Catcher in the Rye',
    who: 'J.D. Salinger',
    when: 'Page 118 of 155',
    notes: "76.1% Completion"
  }, {
    what: 'Lord of the Flies',
    who: 'William Golding',
    when: 'Page 125 of 189',
    notes: "66.1% Completion"
  }, {
    what: 'The Catcher in the Rye',
    who: 'J.D. Salinger',
    when: 'Page 118 of 155',
    notes: "76.1% Completion"
  }];
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.showAdd = function(ev) {
    $mdDialog.show({
        controller: DialogController,
        template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
        targetEvent: ev,
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
  };
}]);
