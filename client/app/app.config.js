
angular.module('Mod').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state("index", {
            url: "/login",
            templateUrl: "index.html",
            controller: "MainCtrl"
        });

    $urlRouterProvider.otherwise("/index");
     
}]);


