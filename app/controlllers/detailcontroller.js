app.controller('DetailController', function($scope, $routeParams, $http) {
    $http.get('data/doctors.json').then(function(response) {
      var doctors = response.data;
      var doctorId = $routeParams.doctorId;
      $scope.doctor = doctors.find(doc => doc.id == doctorId);
    });
  });
  