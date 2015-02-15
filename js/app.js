var app = angular.module('my-app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    var rp = $routeProvider;
    
    rp.when('/', {
      templateUrl: 'views/home.html'
    });

    rp.when('/dependencias', {
      templateUrl: 'views/dependencias.html'
    });

    rp.otherwise({
      redirectTo: '/'
    });

  }]);