app.controller('MainController', function($scope, $http) {
  $http.get('data/doctors.json').then(function(response) {
    $scope.doctors = response.data;
  });

  $scope.searchQuery = '';
  $scope.sortField = '';

  $scope.clearSearch = function() {
    $scope.searchQuery = '';
  };

  $scope.sortByName = function() {
    $scope.sortField = 'name';
  };
});
$scope.showForm = false;
$scope.newDoctor = {};

$scope.addDoctor = function() {
  if ($scope.newDoctor.name && $scope.newDoctor.specialty) {
    
    const newId = $scope.doctors.length ? Math.max(...$scope.doctors.map(d => d.id)) + 1 : 1;
    $scope.newDoctor.id = newId;

    $scope.doctors.push(angular.copy($scope.newDoctor));

    $scope.newDoctor = {};
    $scope.showForm = false;
  } else {
    alert("Please fill in at least the doctor's name and specialty.");
  }
};

  