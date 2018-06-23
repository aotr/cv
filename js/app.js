angular.module('aotr', [])
.controller('personal_information', function($scope, $http) {
    $http.
    get(
        'https://raw.githubusercontent.com/aotr/cv/master/js/info.json',
        {
        params:  {},
        headers: {   
            }
        }
    ).
    then(function(response) {
                console.info(response);
                $scope.personal_information = response.data.personal_information;
                $scope.skills = response.data.skills;
                $scope.educations = response.data.education;
            });
    
    }).
    filter('titleCase', function() {
    return function(input) {
      input = input || '';
      input = input.replace(RegExp('_', 'g'),' ');

      return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
  });
