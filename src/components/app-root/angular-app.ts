import angular from 'angular';

export default angular.module('myApp', [])

  .controller('MainCtrl', ['$scope' , function MainCtrl($scope) {
    $scope.freelancer = '1';
    $scope.name = 'Becky';
    $scope.handleSubmit = ($event) => {
      $event.preventDefault();
      const { freelancer, name } = $scope;
      console.log({ freelancer, name });
    };
    $scope.handleChange = (ev) => {
      $scope.$applyAsync(() => {
        $scope.freelancer = ev.detail.id;
      });
    };
  }]);
